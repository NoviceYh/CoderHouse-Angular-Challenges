import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaEstudiantes } from '../table/table.component';

@Component({
  selector: 'app-insertar-dialog',
  templateUrl: './insertar-dialog.component.html',
  styleUrls: ['./insertar-dialog.component.css']
})
export class InsertarDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InsertarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListaEstudiantes
  ) { 
    this.formulario = fb.group({
      dni: new FormControl('',[Validators.required,Validators.minLength(1)]),
      nombre: new FormControl('',[Validators.required,Validators.minLength(2)]),
      apellido: new FormControl('',[Validators.required,Validators.minLength(2)]),
      curso: new FormControl('',[Validators.required,Validators.minLength(2)]),
      matriculaAbierta: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  insertar(){
    console.log('Boton') //Esto para ver que llega hasta aca el codigo
    this.dialogRef.close(this.formulario.value) //Esto lo puse porque esta en el editar igual
  }
  
}
