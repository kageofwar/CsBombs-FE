import { Component, Input, OnInit } from '@angular/core';

import { MapaService } from '../mapa.service';
import { Mapa } from '../mapa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-home',
  templateUrl: './input-home.component.html',
  styleUrls: ['./input-home.component.css']
})
export class InputHomeComponent implements OnInit {

  selectedMap = '';

  mapas: Mapa[] = [];

  constructor(
    private service: MapaService,
    private router: Router
    ) 
  { }
  
  ngOnInit(): void {
    this.service.listar().subscribe((mapas) => {
      this.mapas = mapas
    }) 
  }

  redirectToMap() {
    if (this.selectedMap) {
      this.router.navigate(['/map_info', this.selectedMap]);
    }
  }
}
