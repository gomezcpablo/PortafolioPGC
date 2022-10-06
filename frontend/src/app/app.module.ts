import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarIdiomaComponent } from './registrar-idioma/registrar-idioma.component';
import { FormsModule } from '@angular/forms';
import { ActualizarIdiomaComponent } from './actualizar-idioma/actualizar-idioma.component';
import { SkillsComponent } from './skills/skills.component';
import { MainComponent } from './main/main.component';
import { RegistrarSkillComponent } from './registrar-skill/registrar-skill.component';
import { ActualizarSkillComponent } from './actualizar-skill/actualizar-skill.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { RegistrarExperienciaComponent } from './registrar-experiencia/registrar-experiencia.component';
import { ActualizarExperienciaComponent } from './actualizar-experiencia/actualizar-experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { RegistrarEstudioComponent } from './registrar-estudio/registrar-estudio.component';
import { ActualizarEstudioComponent } from './actualizar-estudio/actualizar-estudio.component';
import { DatosComponent } from './datos/datos.component';
import { ActualizarDatosComponent } from './actualizar-datos/actualizar-datos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './interceptor-service';


@NgModule({
  declarations: [
    AppComponent,
    IdiomasComponent,
    RegistrarIdiomaComponent,
    ActualizarIdiomaComponent,
    SkillsComponent,
    MainComponent,
    RegistrarSkillComponent,
    ActualizarSkillComponent,
    ExperienciasComponent,
    RegistrarExperienciaComponent,
    ActualizarExperienciaComponent,
    EstudiosComponent,
    RegistrarEstudioComponent,
    ActualizarEstudioComponent,
    DatosComponent,
    ActualizarDatosComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
