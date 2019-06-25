import { CompanyComponent } from './../../components/company/company.component';
import { PersonComponent } from './../../components/person/person.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'pf', component: PersonComponent},
  {path: 'pj', component: CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
