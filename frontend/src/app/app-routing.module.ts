import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarIdiomaComponent } from './actualizar-idioma/actualizar-idioma.component';
import { ActualizarSkillComponent } from './actualizar-skill/actualizar-skill.component';
import { AppComponent } from './app.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { MainComponent } from './main/main.component';
import { RegistrarIdiomaComponent } from './registrar-idioma/registrar-idioma.component';
import { RegistrarSkillComponent } from './registrar-skill/registrar-skill.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'idiomas', component:IdiomasComponent},
  {path:'registrar-idioma', component:RegistrarIdiomaComponent},
  {path:'actualizar-idioma/:id', component:ActualizarIdiomaComponent},
  {path:'registrar-skill', component:RegistrarSkillComponent},
  {path:'actualizar-skill/:id', component:ActualizarSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
