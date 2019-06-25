import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  @Input() socio;
  
  constructor() { }

  ngOnInit() {
  }

}
