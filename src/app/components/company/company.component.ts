import { Company } from './../../models/company';
import { CompanyResponseComponent } from './company-response/company-response.component';
import { Router } from '@angular/router';
import { ConsultaService } from './../../consulta.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  msg_error: string;
  durationInSeconds: number = 5;
  company: Company[] = [];

  constructor(private data: ConsultaService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onEnter(value: string) {
    const regex = /[\/\.\-]/g;
    value = value.replace(regex, "");
    if (this.validarCNPJ(value)) {
      this.data.getRegs(value).subscribe(company => {
        console.log(company);
        if (company.status == 'ERROR') {
          this.company = null;
          this.msg_error = 'Nenhum registro encontrado!';
          this.snackBar.open(this.msg_error, null, { duration: this.durationInSeconds * 1000, panelClass: ['snackBar-fail'] });
        } else {
          this.company = company;
          console.log(this.company);
        } 
      }, err => {
        this.company = null;
        this.msg_error = 'Problema com a conexão!';
        this.snackBar.open(this.msg_error, null, { duration: this.durationInSeconds * 1000, panelClass: ['snackBar-fail'] });
        console.log(err);
      });
    } else {
      this.msg_error = 'Cnpj Inválido!';
      this.snackBar.open(this.msg_error, null, { duration: this.durationInSeconds * 1000, panelClass: ['snackBar-fail'] });
    }

  }

  validarCNPJ(cnpj) {
    var tamanho;
    var numeros;
    var digitos;
    var soma;
    var pos;
    var resultado;

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return '';

    if (cnpj.length != 14)
      return '';

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999")
      return '';

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
      return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
      return '';

    return cnpj;

  }
}
