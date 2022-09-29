import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-registrar-skill',
  templateUrl: './registrar-skill.component.html',
  styleUrls: ['./registrar-skill.component.css']
})
export class RegistrarSkillComponent implements OnInit {

  skill: Skill = new Skill();
  constructor(private skillServicio: SkillService, private router: Router) { }

  ngOnInit(): void {
    
  }

  guardarSkill(){
    this.skillServicio.registrarSkill(this.skill).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeSkills();

    }, error => console.log(error));
  }

  irALaListaDeSkills(){this.router.navigate(['']);
  swal('Skill registrado',`El skill ${this.skill.nombre} ha sido registrado con exito`,`success`);
}
  onSubmit(){
    this.guardarSkill();
  }

}
