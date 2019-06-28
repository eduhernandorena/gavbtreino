import { ConsultaService } from './../../consulta.service';
import { Person } from './../../models/person';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  formCliente: FormGroup;

  constructor(private cService: ConsultaService) {
  }

  ngOnInit() {
    this.createForm(new Person());
  }

  createForm(person: Person) {
    this.formCliente = new FormGroup({
      nome: new FormControl(person.nome),
      email: new FormControl(person.email, Validators.compose([Validators.email])),
      cpf: new FormControl(person.cpf),
      abertura: new FormControl(person.abertura),
      logradouro: new FormControl(person.endereco.logradouro),
      bairro: new FormControl(person.endereco.bairro),
      cidade: new FormControl(person.endereco.cidade),
      uf: new FormControl(person.endereco.uf),
      cep: new FormControl(person.endereco.cep),
    });
  }

  salvar() {
    this.cService.setRegs(this.formCliente.value);
    console.log(this.formCliente);
  }

  hasUntouched() {
    return this.formCliente.untouched;
  }

  onBlurTouched() {
    var touched: boolean = false;
    Object.keys(this.formCliente.controls).forEach(field => {
      const control = this.formCliente.get(field);
      if (control.value == null || control.value == '') {
        control.markAsUntouched({ onlySelf: true });
      }
      if (!control.untouched) {
        touched = true;
      }
    });
    if (!touched) {
      this.formCliente.markAsUntouched({ onlySelf: true });
    }
  }

}
