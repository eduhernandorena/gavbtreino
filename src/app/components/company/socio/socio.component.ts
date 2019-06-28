import { Partner } from './../../../models/partner';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  @Input() socios: Partner[];

  displayedColumns: string[] = ['cod', 'cargo', 'nome'];

  constructor() { }

  ngOnInit() {
  }

  mySplit = function (string, nb) {
    var array = string.split('-');
    return array[nb];
  }

}
