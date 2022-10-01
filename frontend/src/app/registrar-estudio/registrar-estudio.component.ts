import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Estudio } from '../estudio';
import { EstudioService } from '../estudio.service';

@Component({
  selector: 'app-registrar-estudio',
  templateUrl: './registrar-estudio.component.html',
  styleUrls: ['./registrar-estudio.component.css']
})
export class RegistrarEstudioComponent implements OnInit {
  estudio: Estudio = new Estudio();
  constructor(private estudioServicio: EstudioService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.estudio);
  }

  guardarEstudio(){
    this.estudioServicio.registrarEstudio(this.estudio).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeEstudios();

    }, error => console.log(error));
  }

  irALaListaDeEstudios(){
    this.router.navigate(['']);
    swal('Estudio registrado',`El estudio ${this.estudio.position} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarEstudio();
  }

}
