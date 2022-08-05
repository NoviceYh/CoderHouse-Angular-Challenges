import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formularioContacto !: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formularioContacto = this.fb.group({
      nombre: new FormControl('',[Validators.required,Validators.minLength(2)]),
      apellido: new FormControl('',[Validators.required,Validators.minLength(2)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      direccion: new FormControl('',[Validators.required,Validators.minLength(2)]),
      genero: new FormControl('',[Validators.required])
    });
  }

  enviarDatos(){
    console.log(this.formularioContacto);
    window.location.reload();
  }
  
  limpiar(){
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
