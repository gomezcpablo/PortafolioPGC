import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Experiencia } from '../experiencia';
import { ExperienciaService } from '../experiencia.service';

@Component({
  selector: 'app-registrar-experiencia',
  templateUrl: './registrar-experiencia.component.html',
  styleUrls: ['./registrar-experiencia.component.css']
})
export class RegistrarExperienciaComponent implements OnInit {
  experiencia: Experiencia = new Experiencia();
  constructor(private experienciaServicio: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.experiencia);
  }

  guardarExperiencia(){
    this.experienciaServicio.registrarExperiencia(this.experiencia).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeExperiencias();

    }, error => console.log(error));
  }

  irALaListaDeExperiencias(){
    this.router.navigate(['']);
    swal('Experiencia registrada',`La experiencia ${this.experiencia.position} ha sido registrada con exito`,`success`);
  }

  onSubmit(){
    this.guardarExperiencia();
  }

}
