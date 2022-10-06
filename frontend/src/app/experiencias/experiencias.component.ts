import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Experiencia } from '../experiencia';
import { ExperienciaService } from '../experiencia.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencias: Experiencia[];
  constructor(private experienciaServicio:ExperienciaService, private router:Router,private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.obtenerExperiencias();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   }
 
   actualizarExperiencia(id: number){
     this.router.navigate(['actualizar-experiencia', id]);
   }
 
 
 
   private obtenerExperiencias(){
     this.experienciaServicio.obtenerListaExperiencias().subscribe(dato => {
       this.experiencias= dato;
     })
   }
 
 
 
   eliminarExperiencia(id:number){
     swal({
       title: '¿Estas seguro?',
       text: "Confirma si deseas eliminar la experiencia",
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Si , elimínalo',
       cancelButtonText: 'No, cancelar',
       confirmButtonClass: 'btn btn-success',
       cancelButtonClass: 'btn btn-danger',
       buttonsStyling: true
     }).then((result) => {
       if(result.value){
         this.experienciaServicio.eliminarExperiencia(id).subscribe(dato => {
           console.log(dato);
           this.obtenerExperiencias();
           swal(
             'Experiencia eliminada',
             'La experiencia ha sido eliminada con exito',
             'success'
           )
         })
       }
     })
   }
 

}
