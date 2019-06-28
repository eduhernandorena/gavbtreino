import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  public companyUrl: string = 'http://localhost:8090/company/';
  public personUrl: string = 'http://localhost:8090/person/';
  retorno: any;

  constructor(private http: HttpClient) { }

  getRegs(cnpj: string) {
    this.retorno = this.http.get(this.companyUrl + cnpj);
    return this.retorno;
  }

  setRegs(values: string) {
    this.retorno = this.http.post(this.personUrl, values);
    console.log(this.retorno);
    return this.retorno;
  }
}
