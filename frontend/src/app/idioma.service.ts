import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from './idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  //Esta URL obtiene todos los idiomas de la base de datos
  private baseURL ="http://localhost:8080/api/v1/idiomas";

  constructor(private httpClient: HttpClient) {}

  //Este metodo sirve para obtener todos los idiomas
  obtenerListaIdiomas():Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(`${this.baseURL}`);
  }

  //Este metodo sirve para registrar un idioma
  registrarIdioma(idioma:Idioma): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, idioma);
  }

  //Este metodo sirve para actualizar un idiomas
  actualizarIdioma(id:number, idioma: Idioma): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, idioma);
  }

  //Este metodo sirve para obtener o buscar un idioma por ID
  obtenerIdiomaPorId(id:number):Observable<Idioma>{
    return this.httpClient.get<Idioma>(`${this.baseURL}/${id}`);
  }

  //Este
  eliminarIdioma(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  
}
