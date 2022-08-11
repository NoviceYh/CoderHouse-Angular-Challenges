import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaEstudiantes } from '../table/table.component';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListaEstudiantes
  ) { 
    this.formulario = fb.group({
      dni: new FormControl(data.dni),
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      curso: new FormControl(data.curso),
      matriculaAbierta: new FormControl(data.matriculaAbierta)
    })
  }

  ngOnInit(): void {
  }
  
  cerrar(){
    this.dialogRef.close();
  }

  actualizar(){
    this.dialogRef.close(this.formulario.value)
  }

}
