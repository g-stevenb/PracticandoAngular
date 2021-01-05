import { Component, OnInit } from '@angular/core';
import { ListarDatos } from './../models/listar-datos.models';

@Component({
  selector: 'app-solicitar-datos',
  templateUrl: './solicitar-datos.component.html',
  styleUrls: ['./solicitar-datos.component.css']
})
export class SolicitarDatosComponent implements OnInit {
  datos: ListarDatos[];

  constructor() {
    this.datos = [];
  }

  ngOnInit(){
  }

  guardar(nombre:string, email:string, asunto:string):boolean{
    this.datos.push(new ListarDatos(nombre, email, asunto));
    console.log(this.datos)
    // console.log(nombre);
    // console.log(email);
    // console.log(asunto);
    return false;
  }

}
