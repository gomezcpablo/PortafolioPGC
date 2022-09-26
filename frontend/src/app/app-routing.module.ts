import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarIdiomaComponent } from './actualizar-idioma/actualizar-idioma.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { RegistrarIdiomaComponent } from './registrar-idioma/registrar-idioma.component';

const routes: Routes = [
  {path:'idiomas', component:IdiomasComponent},
  {path:'', redirectTo:'idiomas', pathMatch:'full'},
  {path:'registrar-idioma', component:RegistrarIdiomaComponent},
  {path:'actualizar-idioma/:id', component:ActualizarIdiomaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
