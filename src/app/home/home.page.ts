import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  items: { id: number, nombre: string}[] = [];
  nuevoNombre: string = "";
  nextId: number=1;

  constructor() {}

  ngOnInit() {
    this.cargarItems();
  }

  cargarItems(){

  }

  aniadirItem(){
    if (this.nuevoNombre.trim()){
      this.items.push({id: this.nextId++, nombre: this.nuevoNombre});
      this.nuevoNombre = "";
    }
  }

  actualizarItem(item: any){
    const actNombre = prompt('Ingrese un nuevo nombre para el item: ', item.nombre);
    if (actNombre && actNombre.trim()){
      item.nombre = actNombre;
    }
  }

  eliminarItem(item: any) {
    this.items = this.items.filter(i => i.id !== item.id);
  }
}
