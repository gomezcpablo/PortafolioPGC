import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Estudio } from '../estudio';
import { EstudioService } from '../estudio.service';

@Component({
  selector: 'app-actualizar-estudio',
  templateUrl: './actualizar-estudio.component.html',
  styleUrls: ['./actualizar-estudio.component.css']
})
export class ActualizarEstudioComponent implements OnInit {

  id:number;
  estudio:Estudio = new Estudio();
  constructor(private estudioServicio:EstudioService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.estudioServicio.obtenerEstudioPorId(this.id).subscribe(dato =>{
      this.estudio = dato;
    }, error => console.log(error));
  }

  irALaListaDeEstudios(){
    this.router.navigate(['']);
    swal('Estudio actualizado',`El estudio ${this.estudio.position} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.estudioServicio.actualizarEstudio(this.id,this.estudio).subscribe(dato => {
      this.irALaListaDeEstudios();
    },error => console.log(error));
  }


}

