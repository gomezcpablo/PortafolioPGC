import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarDatosComponent } from './actualizar-datos/actualizar-datos.component';
import { ActualizarEstudioComponent } from './actualizar-estudio/actualizar-estudio.component';
import { ActualizarExperienciaComponent } from './actualizar-experiencia/actualizar-experiencia.component';
import { ActualizarIdiomaComponent } from './actualizar-idioma/actualizar-idioma.component';
import { ActualizarSkillComponent } from './actualizar-skill/actualizar-skill.component';
import { AppComponent } from './app.component';
import { DatosComponent } from './datos/datos.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { MainComponent } from './main/main.component';
import { RegistrarEstudioComponent } from './registrar-estudio/registrar-estudio.component';
import { RegistrarExperienciaComponent } from './registrar-experiencia/registrar-experiencia.component';
import { RegistrarIdiomaComponent } from './registrar-idioma/registrar-idioma.component';
import { RegistrarSkillComponent } from './registrar-skill/registrar-skill.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'idiomas', component:IdiomasComponent},
  {path:'registrar-idioma', component:RegistrarIdiomaComponent},
  {path:'actualizar-idioma/:id', component:ActualizarIdiomaComponent},
  {path:'registrar-skill', component:RegistrarSkillComponent},
  {path:'actualizar-skill/:id', component:ActualizarSkillComponent},
  {path:'experiencias', component:ExperienciasComponent},
  {path:'registrar-experiencia', component:RegistrarExperienciaComponent},
  {path:'actualizar-experiencia/:id', component:ActualizarExperienciaComponent},
  {path:'estudios', component:EstudiosComponent},
  {path:'registrar-estudio', component:RegistrarEstudioComponent},
  {path:'actualizar-estudio/:id', component:ActualizarEstudioComponent},
  {path:'datos', component:DatosComponent},
  {path:'actualizar-datos/:id', component:ActualizarDatosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
