import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})
export class MapInfoComponent implements OnInit {

  @Input() mapa = {
    nome: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  
  par = this.activatedRoute.snapshot.paramMap.get('mapa');
  
  ngOnInit(): void {
  }

}
