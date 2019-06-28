import { Company } from './../../../models/company';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-response',
  templateUrl: './company-response.component.html',
  styleUrls: ['./company-response.component.css']
})
export class CompanyResponseComponent implements OnInit {

  @Input() company: Company;
  constructor() { }

  ngOnInit() {
    this.company = null;
  }

}
