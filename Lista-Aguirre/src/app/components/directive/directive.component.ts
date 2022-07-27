import { NoopAnimationPlayer } from '@angular/animations';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  palabras = ['papa', 'pepe', 'pipi'];

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
