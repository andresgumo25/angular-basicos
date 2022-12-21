import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
})

export class ContadorComponent{
  public title: string = 'bases';
  public numero: number = 2;
  public base: number = 5 ;

  acumular( valor: number){
    this.numero += valor;
  }
}