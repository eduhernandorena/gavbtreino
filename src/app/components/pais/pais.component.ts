import { Pais } from './../../models/pais';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UnidadeFederacao } from './../../models/unidade-federacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  formPais: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm(new Pais());
  }

  createForm(pais: Pais) {
    this.formPais = new FormGroup({
      nome: new FormControl(pais.nome),
      sigla: new FormControl(pais.sigla),
      code: new FormControl(pais.code, Validators.pattern('/[^0-9]/g')),
    });
  }

}
