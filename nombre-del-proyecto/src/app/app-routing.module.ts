import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'nuevaexp', component: NewExperienciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
