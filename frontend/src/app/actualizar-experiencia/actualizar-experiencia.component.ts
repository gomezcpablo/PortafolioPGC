import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Experiencia } from '../experiencia';
import { ExperienciaService } from '../experiencia.service';

@Component({
  selector: 'app-actualizar-experiencia',
  templateUrl: './actualizar-experiencia.component.html',
  styleUrls: ['./actualizar-experiencia.component.css']
})
export class ActualizarExperienciaComponent implements OnInit {

  id:number;
  experiencia:Experiencia = new Experiencia();
  constructor(private experienciaServicio:ExperienciaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.experienciaServicio.obtenerExperienciaPorId(this.id).subscribe(dato =>{
      this.experiencia = dato;
    }, error => console.log(error));
  }

  irALaListaDeExperiencias(){
    this.router.navigate(['']);
    swal('Experiencia actualizada',`La experiencia ${this.experiencia.position} ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.experienciaServicio.actualizarExperiencia(this.id,this.experiencia).subscribe(dato => {
      this.irALaListaDeExperiencias();
    },error => console.log(error));
  }


}
