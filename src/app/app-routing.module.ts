import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LocalidadComponent} from "./components/localidad/localidad.component";
import {TipoMascotaComponent} from "./components/tipo-mascota/tipo-mascota.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {ProductoComponent} from "./components/producto/producto.component";
import {SucursalComponent} from "./components/sucursal/sucursal.component";
import {ProveedorService} from "./services/proveedor/proveedor.service";
import {ProveedorComponent} from "./components/proveedor/proveedor.component";
import {PrecioComponent} from "./components/precio/precio.component";
import {ClienteComponent} from "./components/cliente/cliente.component";
import {ListadoComponent} from "./components/listado/listado.component";
import {DetalleComponent} from "./components/detalle/detalle.component";


//Rutas de Navegacion
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'}, //Esta es para cuando se pone vacio
  {path: 'home', component: HomeComponent},
  {path: 'localidad', component: LocalidadComponent},
  {path: 'tipo-mascota', component: TipoMascotaComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'sucursal', component: SucursalComponent},
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'precio', component: PrecioComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: '**', component: PagenotfoundComponent}, //Comodin: Cuando se ingresa una url que no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
