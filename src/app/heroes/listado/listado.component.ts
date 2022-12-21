import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]= ['spiderman','Ironman','Hulk','Capitan America']
  heroeborrado: string= "";
  borrarHeroe(){
    this.heroeborrado=this.heroes.shift() || "";
   
  }

}
