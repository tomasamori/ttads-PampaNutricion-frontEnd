import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../../services/carrito/carrito.service";
import {Producto} from "../../models/producto";
import {Router} from "@angular/router";



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(protected carritoService:CarritoService, private router:Router) { }
private totalpr=0;
  ngOnInit(): void {
    this.getallProd();
    this.total();
  }
getallProd() {
return this.carritoService.getAllCarrito()
  }

  Sumar(item: Producto) {
item.cantidad+=1;
this.carritoService.addCarrito(item);
  }


  RestarCantidad(item: Producto) {
    item.cantidad-=1;
    this.carritoService.addCarrito(item);
  }

  subtotal(item: Producto) {

    return item.cantidad*item.precio.valor;
  }

  total() {
    this.totalpr=0;
   let prod:Producto[]=this.carritoService.getAllCarrito();
    prod.forEach((prod,i)=>{
      this.totalpr+=prod.cantidad*prod.precio.valor;
    })
return this.totalpr;
  }

  Comprar() {

  }

  Vaciar() {
this.carritoService.vaciarCarrito();
this.router.navigate(['/carrito']);
  }

  Delete(item: Producto) {
    this.carritoService.deleteProd(item);
    this.total();
  }
}
