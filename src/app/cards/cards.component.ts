import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var cartas = new Array( 
      {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
      {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
      {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
      {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false}, 
      {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
      {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
      {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
      {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false} );
  }

}
