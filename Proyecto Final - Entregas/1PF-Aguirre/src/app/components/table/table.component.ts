import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';
import { InsertarDialogComponent } from '../insertar-dialog/insertar-dialog.component';
import { EliminarDialogComponent } from '../eliminar-dialog/eliminar-dialog.component';

export interface ListaEstudiantes {
  dni: number;
  nombre: string;
  apellido: string;
  curso: string;
  matriculaAbierta: boolean;
}

const ELEMENT_DATA: ListaEstudiantes[] = [
  {dni: 12555698, nombre: 'Jorge Temor', apellido: 'Agastar', curso: 'Angular', matriculaAbierta: true},
  {dni: 25654988, nombre: 'Raton', apellido: 'Vernudes', curso: 'Angular', matriculaAbierta: true},
  {dni: 30256656, nombre: 'Juan Roncar', apellido: 'Riquelme', curso: 'Angular', matriculaAbierta: false},
  {dni: 28895321, nombre: 'Pechito', apellido: 'Romero', curso: 'C++', matriculaAbierta: true},
  {dni: 26666547, nombre: 'Dario', apellido: 'Memedeto', curso: 'C++', matriculaAbierta: false},
  {dni: 31256698, nombre: 'Chicho', apellido: 'Siesta', curso: 'React Js', matriculaAbierta: true},
  {dni: 15478889, nombre: 'Chelo', apellido: 'Descanso', curso: 'Java', matriculaAbierta: true}
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columnas: string[] = ['dni','nombre','curso','matriculaAbierta','acciones'];
  dataSource: MatTableDataSource<ListaEstudiantes> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<ListaEstudiantes>; //A traves del ViewChild voy a ver el elemento MatTable

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: ListaEstudiantes){
    const dialogRef = this.dialog.open(EliminarDialogComponent, {
      width: '350px'
    })
    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado == 'eliminar'){
        this.dataSource.data = this.dataSource.data.filter((lista: ListaEstudiantes) => lista.dni != elemento.dni)
      }
    })
    //this.dataSource.data = this.dataSource.data.filter((lista: ListaEstudiantes) => lista.dni != elemento.dni)
    //this.dataSource.data = this.dataSource.data.filter((curso: Curso) => curso.nombre != elemento.nombre)
  }

  editar(elemento: ListaEstudiantes){
    //Abrimos el modal del boton 'editar'
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '350px', //ancho del modal
      data: elemento //los datos que le enviamos al modal que despues vamos a modificar
    });

    //recibimos los datos del formulario al cerrarse, de 'actualizar()' desde editar-dialog.ts
    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        //actualizar la informacion
        const item = this.dataSource.data.find(lista => lista.dni === resultado.dni);
        const index = this.dataSource.data.indexOf(item!); //Porque el valor podria estar o no estar
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();//Renderizo/actualizo las filas de la tabla
      }
    })
  }

  insertar(){
    const dialogRef = this.dialog.open(InsertarDialogComponent, {
      width: '350px'
    })
    //recibimos los datos del formulario al cerrarse, de 'insertar()' desde insertar-dialog.ts
    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        //insertar la informacion
        const dni = this.dataSource.data.filter(lista => lista.dni == resultado.dni);
        /*const item = this.dataSource.data.find(lista => lista.dni === resultado.dni);
        const index = this.dataSource.data.indexOf(item!);*/
        
        if(dni.length === 1){
          alert('El dni ya existe')
        }else{
          this.dataSource.data.push(resultado)
          this.tabla.renderRows();//Renderizo/actualizo las filas de la tabla
        }
        /*const x = this.dataSource.data.includes(resultado.dni)
        const item = this.dataSource.data.find(lista => lista.dni === resultado.dni);
        const index = this.dataSource.data.indexOf(item!);
        if(x){
          alert('El dni ya existe')
        } //Porque el valor podria estar o no estar
        */
        
      }
    })
    console.log('Funciona')
  }

  filtrar(evento: Event){
    const valorObtenido = (evento.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
