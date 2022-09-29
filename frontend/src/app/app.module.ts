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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
