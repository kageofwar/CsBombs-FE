import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mapa } from './mapa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private readonly API = 'http://127.0.0.1:8000/api/maps'

constructor(private http: HttpClient) { }

listar(): Observable<Mapa[]> {
  return this.http.get<Mapa[]>(this.API)
}

buscarPorId(id: number): Observable<Mapa> {
  const url = `${this.API}/${id}`
  return this.http.get<Mapa>(url)
}
}
