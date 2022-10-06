import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Idioma } from '../idioma';
import { IdiomaService } from '../idioma.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  idiomas:Idioma[];

  constructor(private idiomaServicio:IdiomaService, private router:Router, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
   this.obtenerIdiomas();
   if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  actualizarIdioma(id: number){
    this.router.navigate(['actualizar-idioma', id]);
  }



  private obtenerIdiomas(){
    this.idiomaServicio.obtenerListaIdiomas().subscribe(dato => {
      this.idiomas= dato;
    })
  }



  eliminarIdioma(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el idioma",
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
        this.idiomaServicio.eliminarIdioma(id).subscribe(dato => {
          console.log(dato);
          this.obtenerIdiomas();
          swal(
            'Idioma eliminado',
            'El idioma ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }


}
