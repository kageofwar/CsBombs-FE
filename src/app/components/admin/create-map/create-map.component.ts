import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapaService } from '../../Principal/mapa.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
  styleUrls: ['./create-map.component.css']
})
export class CreateMapComponent implements OnInit {
  
  mapSites: { nome: string }[] = [];
  site: {nome: string} = { nome: '' }

  name = '';
  selectedFile: File | null = null;
  sites = this.mapSites;

  constructor(
    private router: Router,
    private service: MapaService,
    private http: HttpClient

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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  CriarMapa() {
    if (!this.selectedFile) {
      console.error('Nenhum arquivo selecionado.');
      return;
    }
    const sitesJSON = JSON.stringify(this.sites);

    const formData = new FormData();
    formData.append("map_url_pic", this.selectedFile);
    formData.append("name", this.name);
    formData.append("sites", sitesJSON);

    const $upload = this.http.post("http://10.30.16.83:8000/api/maps", formData);

    $upload.subscribe();
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