import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapaService } from '../../Principal/mapa.service';
import { Mapa } from '../../Principal/mapa';


@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
  styleUrls: ['./create-map.component.css']
})
export class CreateMapComponent implements OnInit {

  mapa: Mapa = {
    name: ''
  }

  mapSites: { nome: string }[] = [];

  site: {nome: string} = {
    nome: ''
  }

  constructor(
    private router: Router,
    private service: MapaService

  ) { }

  ngOnInit(): void {
  }

  addNewMapSite(): void {
    const newSite = { ...this.site };
    if (newSite.nome.length < 3){

    } else {
      this.mapSites.push(newSite);
      this.site.nome = '';
      console.log(this.mapSites)
    }
  }

  CriarMapa() {
    this.service.criarMapa(this.mapa).subscribe()
  }

  removeSite(index: number): void {
    if (index >= 0 && index < this.mapSites.length) {
        this.mapSites.splice(index, 1);
    }
    console.log(this.mapSites)
  }

  redirectTo() {
    this.router.navigate(['/home']);
  }
}