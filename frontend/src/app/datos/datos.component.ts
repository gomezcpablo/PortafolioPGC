import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  datos: Datos[];
  constructor(private datosServicio:DatosService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
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
