import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from './jwt-dto';
import { LoginUsuario } from './login-usuario';
import { NuevoUsuario } from './nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL ="http://localhost:8080/api/v1"

  constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.baseURL + '/nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.baseURL + '/login', loginUsuario)
 }
}
