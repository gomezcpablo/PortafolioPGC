import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-actualizar-skill',
  templateUrl: './actualizar-skill.component.html',
  styleUrls: ['./actualizar-skill.component.css']
})
export class ActualizarSkillComponent implements OnInit {
  
  id:number;
  skill:Skill = new Skill();
  constructor(private skillServicio:SkillService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.skillServicio.obtenerSkillPorId(this.id).subscribe(dato =>{
      this.skill = dato;
    }, error => console.log(error));
  }

  irALaListaDeSkills(){
    this.router.navigate(['']);
    swal('Skill actualizado',`El skill ${this.skill.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.skillServicio.actualizarSkill(this.id,this.skill).subscribe(dato => {
      this.irALaListaDeSkills();
    },error => console.log(error));
  }


}
