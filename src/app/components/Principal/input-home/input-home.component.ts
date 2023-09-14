import { Component, Input, OnInit } from '@angular/core';

import { MapaService } from '../mapa.service';
import { Mapa } from '../mapa';

@Component({
  selector: 'app-input-home',
  templateUrl: './input-home.component.html',
  styleUrls: ['./input-home.component.css']
})
export class InputHomeComponent implements OnInit {

  mapas: Mapa[] = [];

  constructor(private service: MapaService) { }
  
  ngOnInit(): void {
    this.service.listar().subscribe((mapas) => {
      this.mapas = mapas
    }) 
  }
  
  selecionarMapa() {
    
  }
  
  //ngOnInit(): void {
  //  this.service.listar().subscribe((ListaMapas) => {
  //    this.Mapas = ListaMapas
  //  })
  //}

}
