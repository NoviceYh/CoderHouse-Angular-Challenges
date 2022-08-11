import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { AppMaterialModule } from './app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TransformarPipe } from './pipes/transformar.pipe';
import { InsertarDialogComponent } from './components/insertar-dialog/insertar-dialog.component';
import { EliminarDialogComponent } from './components/eliminar-dialog/eliminar-dialog.component';
import { TitulosDirective } from './directives/titulos.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    TableComponent,
    EditarDialogComponent,
    TransformarPipe,
    InsertarDialogComponent,
    EliminarDialogComponent,
    TitulosDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
