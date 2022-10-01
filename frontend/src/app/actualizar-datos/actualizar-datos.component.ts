import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.css']
})
export class ActualizarDatosComponent implements OnInit {

  id:number;
  datos:Datos = new Datos();
  constructor(private datosServicio:DatosService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.datosServicio.obtenerDatosPorId(this.id).subscribe(dato =>{
      this.datos = dato;
    }, error => console.log(error));
  }

  irALaListaDeDatos(){
    this.router.navigate(['']);
    swal('Info actualizada',`La información ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.datosServicio.actualizarDatos(this.id,this.datos).subscribe(dato => {
      this.irALaListaDeDatos();
    },error => console.log(error));
  }


}
