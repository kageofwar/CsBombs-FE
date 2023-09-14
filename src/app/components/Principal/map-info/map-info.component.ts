import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mapa } from '../mapa';
import { MapaService } from '../mapa.service';

@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})
export class MapInfoComponent implements OnInit {

  mapa: Mapa = {
    id: 0,
    name: ''
  }

  constructor(
    private service: MapaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((mapa) => {
      this.mapa = mapa
    })
  }

}
