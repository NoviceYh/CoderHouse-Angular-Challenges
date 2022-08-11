import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-dialog',
  templateUrl: './eliminar-dialog.component.html',
  styleUrls: ['./eliminar-dialog.component.css']
})
export class EliminarDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EliminarDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.dialogRef.close('eliminar');
  }

  volver(){
    this.dialogRef.close();
  }

}
