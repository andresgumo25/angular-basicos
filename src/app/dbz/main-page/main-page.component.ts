import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})


export class MainPageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    },{
      nombre: 'Krillin',
      poder: 150
    }
  ]

  agregarNuevoPersonaje( argumento: Personaje) {
    this.personajes.push(argumento)
  }
  
}
