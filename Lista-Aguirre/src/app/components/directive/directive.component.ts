import { NoopAnimationPlayer } from '@angular/animations';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  actualDate = Date.now();

  countries = {
    colombia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png',
    argentina: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png',
    uruguay: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/270px-Flag_of_Uruguay.svg.png',
    chile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png',
    paraguay: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/328px-Flag_of_Paraguay.svg.png'
  }

  team2 = [{
    nombre: 'Franco',
    apellido: 'Armani',
    posicion: 'Arquero',
    nacionalidad: 'Argentino',
    condicion_fisica: 9
  },{
    nombre: 'Emanuel',
    apellido: 'Mammana',
    posicion: 'Defensor',
    nacionalidad: 'Argentino',
    condicion_fisica: 8
  },{
    nombre: 'Paulo',
    apellido: 'Diaz',
    posicion: 'Defensor',
    nacionalidad: 'Chileno',
    condicion_fisica: 8
  },{
    nombre: 'Javier',
    apellido: 'Pinola',
    posicion: 'Defensor',
    nacionalidad: 'Argentino',
    condicion_fisica: 7
  },{
    nombre: 'Jhonatan',
    apellido: 'Maidana',
    posicion: 'Defensor',
    nacionalidad: 'Argentino',
    condicion_fisica: 7
  },{
    nombre: 'Robert',
    apellido: 'Rojas',
    posicion: 'Defensor',
    nacionalidad: 'Paraguayo',
    condicion_fisica: 2
  },{
    nombre: 'Felipe',
    apellido: 'Peña',
    posicion: 'Defensor',
    nacionalidad: 'Argentino',
    condicion_fisica: 2
  },{
    nombre: 'Hector David',
    apellido: 'Martinez',
    posicion: 'Defensor',
    nacionalidad: 'Paraguayo',
    condicion_fisica: 6
  },{
    nombre: 'Milton',
    apellido: 'Casco',
    posicion: 'Defensor',
    nacionalidad: 'Argentino',
    condicion_fisica: 10
  },{
    nombre: 'Elias',
    apellido: 'Gomez',
    posicion: 'Defensor',
    nacionalidad: 'Argentino',
    condicion_fisica: 7
  },{
    nombre: 'Enzo',
    apellido: 'Perez',
    posicion: 'Mediocampista',
    nacionalidad: 'Argentino',
    condicion_fisica: 8
  },{
    nombre: 'Nicolas',
    apellido: 'De La Cruz',
    posicion: 'Mediocampista', 
    nacionalidad: 'Uruguayo',
    condicion_fisica: 9
  },{
    nombre: 'Pablo',
    apellido: 'Solari',
    posicion: 'Mediocampista',
    nacionalidad: 'Argentino',
    condicion_fisica: 9
  },{
    nombre: 'Juan Fernando',
    apellido: 'Quintero',
    posicion: 'Mediocampista',
    nacionalidad: 'Colombiano',
    condicion_fisica: 5
  },{
    nombre: 'Lucas',
    apellido: 'Beltran',
    posicion: 'Delantero',
    nacionalidad: 'Argentino',
    condicion_fisica: 9
  },{
    nombre: 'Miguel',
    apellido: 'Borja',
    posicion: 'Delantero',
    nacionalidad: 'Colombiano',
    condicion_fisica: 9
  },{
    nombre: 'Matias',
    apellido: 'Suarez',
    posicion: 'Delantero',
    nacionalidad: 'Argentino',
    condicion_fisica: 3
  }]

  team = this.team2;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDisponibles(){
    this.team = this.team2.filter(player => player.condicion_fisica > 7);
  }

  mostrarTodos(){
    this.team = this.team2;
  }

}
