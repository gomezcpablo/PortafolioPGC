import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { IdiomaService } from '../idioma.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Idioma } from '../idioma';

@Component({
  selector: 'app-actualizar-idioma',
  templateUrl: './actualizar-idioma.component.html',
  styleUrls: ['./actualizar-idioma.component.css']
})
export class ActualizarIdiomaComponent implements OnInit {

  id:number;
  idioma:Idioma = new Idioma();
  constructor(private idiomaServicio:IdiomaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.idiomaServicio.obtenerIdiomaPorId(this.id).subscribe(dato =>{
      this.idioma = dato;
    }, error => console.log(error));
  }

  irALaListaDeIdiomas(){
    this.router.navigate(['/idiomas']);
    swal('Idioma actualizado',`El idioma ${this.idioma.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.idiomaServicio.actualizarIdioma(this.id,this.idioma).subscribe(dato => {
      this.irALaListaDeIdiomas();
    },error => console.log(error));
  }

}
