import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from './estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  //Esta URL obtiene todos los estudios de la base de datos
  private baseURL ="https://pgc-backend.herokuapp.com/api/v1/estudios";

  constructor(private httpClient: HttpClient) {}

  //Este metodo sirve para obtener todaos los estudios
  obtenerListaEstudios():Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(`${this.baseURL}`);
  }

  //Este metodo sirve para registrar un estudio
  registrarEstudio(estudio:Estudio): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, estudio);
  }

  //Este metodo sirve para actualizar un estudio
  actualizarEstudio(id:number, estudio:Estudio): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, estudio);
  }

  //Este metodo sirve para obtener o buscar un estudio por ID
  obtenerEstudioPorId(id:number):Observable<Estudio>{
    return this.httpClient.get<Estudio>(`${this.baseURL}/${id}`);
  }

  //Este metodo sirve para eliminar un estudio por id
  eliminarEstudio(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  
}
