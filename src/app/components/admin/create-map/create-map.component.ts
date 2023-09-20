import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mapa } from '../../Principal/mapa';

@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
  styleUrls: ['./create-map.component.css']
})
export class CreateMapComponent implements OnInit {

  mapSites: { nome: string }[] = [{
    nome : 'MACACO'
  }];

  site: {nome: string} = {
    nome: ''
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addNewMapSite(): void {
    const newSite = { ...this.site };
    this.mapSites.push(newSite);
    this.site.nome = '';
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