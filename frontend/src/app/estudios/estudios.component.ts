import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Estudio } from '../estudio';
import { EstudioService } from '../estudio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Estudio[];
  constructor(private estudioServicio:EstudioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEstudios();
   }
 
   actualizarEstudios(id: number){
     this.router.navigate(['actualizar-estudio', id]);
   }
 
 
 
   private obtenerEstudios(){
     this.estudioServicio.obtenerListaEstudios().subscribe(dato => {
       this.estudios= dato;
     })
   }
 
 
 
   eliminarEstudio(id:number){
     swal({
       title: '¿Estas seguro?',
       text: "Confirma si deseas eliminar el estudio",
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
         this.estudioServicio.eliminarEstudio(id).subscribe(dato => {
           console.log(dato);
           this.obtenerEstudios();
           swal(
             'Estudio eliminado',
             'El estudio ha sido eliminada con exito',
             'success'
           )
         })
       }
     })
   }
 


}
