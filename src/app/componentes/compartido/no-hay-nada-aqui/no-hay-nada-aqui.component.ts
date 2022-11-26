import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-hay-nada-aqui',
  templateUrl: './no-hay-nada-aqui.component.html',
  styleUrls: ['./no-hay-nada-aqui.component.css']
})
export class NoHayNadaAquiComponent implements OnInit {
  @Input() texto = ''
  constructor() { }

  ngOnInit(): void {
  }

}
