import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //Esta URL obtiene todas las experiencias de la base de datos
  private baseURL ="http://localhost:8080/api/v1/experiencias";

  constructor(private httpClient: HttpClient) {}

  //Este metodo sirve para obtener todas las experiencias
  obtenerListaExperiencias():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(`${this.baseURL}`);
  }

  //Este metodo sirve para registrar una experiencia
  registrarExperiencia(experiencia:Experiencia): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, experiencia);
  }

  //Este metodo sirve para actualizar una experiencia
  actualizarExperiencia(id:number, experiencia:Experiencia): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, experiencia);
  }

  //Este metodo sirve para obtener o buscar una experiencia por ID
  obtenerExperienciaPorId(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(`${this.baseURL}/${id}`);
  }

  //Este metodo sirve para eliminar una experiencia por id
  eliminarExperiencia(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  
}
