import { HostBinding } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ListarDatos } from './../models/listar-datos.models';

@Component({
  selector: 'app-listar-datos',
  templateUrl: './listar-datos.component.html',
  styleUrls: ['./listar-datos.component.css']
})
export class ListarDatosComponent implements OnInit {
  @Input() datos:ListarDatos;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() { }

  ngOnInit(): void {
  }

}
