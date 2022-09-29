import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from '../idioma';
import { IdiomaService } from '../idioma.service';

@Component({
  selector: 'app-registrar-idioma',
  templateUrl: './registrar-idioma.component.html',
  styleUrls: ['./registrar-idioma.component.css']
})
export class RegistrarIdiomaComponent implements OnInit {

  idioma: Idioma = new Idioma();
  constructor(private idiomaServicie: IdiomaService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.idioma);
  }

  guardarIdioma(){
    this.idiomaServicie.registrarIdioma(this.idioma).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeIdiomas();

    }, error => console.log(error));
  }

  irALaListaDeIdiomas(){
    this.router.navigate(['']);
    swal('Idioma registrado',`El idioma ${this.idioma.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarIdioma();
  }

}
