import { PeopleModule } from './modulos/people/people.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './components/person/person.component';
import { CompanyComponent } from './components/company/company.component';
import { ActivityComponent } from './components/company/activity/activity.component';
import { SocioComponent } from './components/company/socio/socio.component';
import { CompanyResponseComponent } from './components/company/company-response/company-response.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnidadeFederacaoComponent } from './components/unidade-federacao/unidade-federacao.component';
import { PaisComponent } from './components/pais/pais.component';
import { MunicipioComponent } from './components/municipio/municipio.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CompanyComponent,
    ActivityComponent,
    SocioComponent,
    CompanyResponseComponent,
    UnidadeFederacaoComponent,
    PaisComponent,
    MunicipioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PeopleModule,
    NgxMaskModule.forRoot(options),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
