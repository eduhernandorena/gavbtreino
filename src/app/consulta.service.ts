import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  public baseUrl: string = 'http://localhost:8080/client/company/';
  retorno: any;

  constructor(private http: HttpClient) { }

  getRegs(cnpj: string) {
    this.retorno = this.http.get(this.baseUrl + cnpj);
    return this.retorno;
  }
}
