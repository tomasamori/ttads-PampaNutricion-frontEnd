import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LocalidadComponent} from "./components/localidad/localidad.component";
import {TipoMascotaComponent} from "./components/tipo-mascota/tipo-mascota.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";

//Rutas de Navegacion
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'}, //Esta es para cuando se pone vacio
  {path: 'home', component: HomeComponent},
  {path: 'localidad', component: LocalidadComponent},
  {path: 'tipo-mascota', component: TipoMascotaComponent},
  {path: '**', component: PagenotfoundComponent}, //Comodin: Cuando se ingresa una url que no existe


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
