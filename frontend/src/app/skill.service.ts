import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //Esta URL obtiene todos los skills de la base de datos
  private baseURL = "https://pgc-backend.herokuapp.com/api/v1/skills";

  constructor(private httpClient: HttpClient) { }

  //Este metodo sirve para obtener todos los idiomas
  obtenerListaSkills():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(`${this.baseURL}`);
  }

  //Este metodo sirve para registrar un skill
  registrarSkill(skill:Skill): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, skill);
  }
  
  //Este metodo sirve para actualizar un skill
  actualizarSkill(id:number, skill: Skill): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, skill);
  }

  //Este metodo sirve para obtener o buscar un skill por ID
  obtenerSkillPorId(id:number):Observable<Skill>{
    return this.httpClient.get<Skill>(`${this.baseURL}/${id}`);
  }

  //Este metodo sirve para eliminar un skill por id
  eliminarSkill(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
