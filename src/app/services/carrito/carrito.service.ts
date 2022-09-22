import { Injectable } from '@angular/core';
import {Producto} from "../../models/producto";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
 public productos:Producto[]=[];
  constructor() { }

  addCarrito(productoDetalle: Producto) {
    if(localStorage.getItem('productos')===null){
      this.productos.push(productoDetalle);
      localStorage.setItem('productos',JSON.stringify(this.productos));
    }else{
      if(this.validar(productoDetalle)==0){
      this.updateProd(productoDetalle);}
      else{
          this.productos.push(productoDetalle);
          localStorage.setItem('productos',JSON.stringify(this.productos));
      }
    }
  }
  getAllCarrito(){
    if(localStorage.getItem('productos')===null){
      return this.productos;
    }else{
      this.productos=JSON.parse(localStorage.getItem('productos'))
      return this.productos;
    }
  }
  deleteProd(productoDetalle:Producto){
    debugger;
    this.productos=JSON.parse(localStorage.getItem('productos'))
    this.productos.forEach((prod,i)=>{
      if(productoDetalle._id==this.productos[i]._id){
        this.productos.splice(i,1);
        localStorage.setItem('productos',JSON.stringify(this.productos));
        debugger;
      }
    })
    console.log(this.productos)
debugger;
      }
  updateProd(productoDetalle:Producto){
    this.productos=JSON.parse(localStorage.getItem('productos'));
    this.productos.forEach((prod,i)=>{
      if(this.productos[i]._id==productoDetalle._id){
        this.productos[i] = productoDetalle;
        localStorage.setItem('productos', JSON.stringify(this.productos));
      }
    })

  }

validar(productoDetalle: Producto) {
    this.productos=JSON.parse(localStorage.getItem('productos'));
  let estado = 1;
    {
      this.productos.forEach((prod,i)=>{
      if(productoDetalle._id==this.productos[i]._id){
        estado=0;
        }})
      }
  return estado
}

  vaciarCarrito() {
    this.productos=[];
    localStorage.clear();
    debugger;
  }
}
