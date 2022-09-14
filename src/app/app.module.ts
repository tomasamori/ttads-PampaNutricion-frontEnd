import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoMascotaComponent } from './components/tipo-mascota/tipo-mascota.component';
import { HomeComponent } from './components/home/home.component';
import { LocalidadComponent } from './components/localidad/localidad.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    TipoMascotaComponent,
    HomeComponent,
    LocalidadComponent,
    NavmenuComponent,
    PagenotfoundComponent,
    ProductoComponent,
    SucursalComponent,
    ProveedorComponent,
    PrecioComponent,
    ClienteComponent,
    ListadoComponent,
    DetalleComponent,
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
