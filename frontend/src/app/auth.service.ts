import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from './jwt-dto';
import { LoginUsuario } from './login-usuario';
import { NuevoUsuario } from './nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL ="https://pgc-backend.herokuapp.com/api/v1"

  constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.baseURL + '/nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.baseURL + '/login', loginUsuario)
 }
}
