import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

skills:Skill[];

  constructor(private skillServicio:SkillService, private router:Router, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void { 
    this.obtenerSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  actualizarSkill(id: number){
    this.router.navigate(['actualizar-skill', id]);
  }


  private obtenerSkills(){
    this.skillServicio.obtenerListaSkills().subscribe(dato => {
    this.skills = dato});
  }

  eliminarSkill(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el skill",
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
        this.skillServicio.eliminarSkill(id).subscribe(dato => {
          console.log(dato);
          this.obtenerSkills();
          swal(
            'Skill eliminado',
            'El skill ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
