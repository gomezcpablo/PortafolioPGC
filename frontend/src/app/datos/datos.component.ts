import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  datos: Datos[];
  constructor(private datosServicio:DatosService, private router:Router,private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.obtenerDatos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   }
 
   actualizarDatos(id: number){
     this.router.navigate(['actualizar-datos', id]);
   }
 
   private obtenerDatos(){
     this.datosServicio.obtenerListaDatos().subscribe(dato => {
       this.datos= dato;
     })
   }
 
}
