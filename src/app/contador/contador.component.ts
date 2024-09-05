import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent  implements OnInit {

  contador:number = 0;


  constructor() { }

  ngOnInit() {}

  sumar():void{
    this.contador ++;
  }
}
