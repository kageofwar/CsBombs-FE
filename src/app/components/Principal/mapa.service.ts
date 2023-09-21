import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mapa } from './mapa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private readonly API = 'http://10.30.16.83:8000/api/maps'

constructor(private http: HttpClient) { }

listar(): Observable<Mapa[]> {
  return this.http.get<Mapa[]>(this.API)
}

buscarPorId(id: number): Observable<Mapa> {
  const url = `${this.API}/${id}`
  return this.http.get<Mapa>(url)
}

criarMapa(mapa: Mapa): Observable<Mapa> {
  return this.http.post<Mapa>(this.API, mapa)
}
}
