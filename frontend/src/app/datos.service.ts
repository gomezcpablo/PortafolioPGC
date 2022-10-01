import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos } from './datos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

 //Esta URL obtiene todos los estudios de la base de datos
 private baseURL ="http://localhost:8080/api/v1/datos";

 constructor(private httpClient: HttpClient) {}

 //Este metodo sirve para obtener todos los datos
 obtenerListaDatos():Observable<Datos[]>{
   return this.httpClient.get<Datos[]>(`${this.baseURL}`);
 }

 //Este metodo sirve para registrar un datos
 registrarDatos(datos:Datos): Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`, datos);
 }

 //Este metodo sirve para actualizar un dato
 actualizarDatos(id:number, datos:Datos): Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`, datos);
 }

 //Este metodo sirve para obtener o buscar un datos por ID
 obtenerDatosPorId(id:number):Observable<Datos>{
   return this.httpClient.get<Datos>(`${this.baseURL}/${id}`);
 }

}
