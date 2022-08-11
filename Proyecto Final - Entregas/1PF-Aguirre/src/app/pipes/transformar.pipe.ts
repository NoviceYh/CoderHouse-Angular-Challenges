import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  transform(value: any): any {
    let resultado = value.nombre + " " + value.apellido;
    return resultado;
  }

}
