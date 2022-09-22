import { Component, OnInit } from '@angular/core';
import {Producto} from "../../models/producto";
import {ActivatedRoute,Router} from "@angular/router";
import {ProductoService} from "../../services/producto/producto.service";
import {CarritoService} from "../../services/carrito/carrito.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  productID: String;
  productoDetalle: Producto;
  constructor(private route: ActivatedRoute,
              private service: ProductoService,
              private carritoService:CarritoService,
              private router:Router) {
    this.productID = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getDataOfProduct()
  }

  getDataOfProduct(){
    this.service.getRecordById(this.productID).subscribe(
      data=>{
        this.productoDetalle = data;

      },
      error => {}
    )
  }


  SumarCantidad(value: string) {
    let cant = <HTMLInputElement>document.getElementById('cantidad');
    let cants= parseInt(cant.value)+1;
    cant.value=cants.toString();
  }

  RestarCantidad(value: string) {
    let cant = <HTMLInputElement>document.getElementById('cantidad');
    if (parseInt(cant.value)>1){ let cants= parseInt(cant.value)-1;
      cant.value=cants.toString();}
  }

  addCarrito(productoDetalle: Producto, value: string) {
productoDetalle.cantidad=parseInt(value,10);
   this.carritoService.addCarrito(productoDetalle);
   this.router.navigate(['listado']);
  }
}
/*
*   addCarrito(productoDetalle: Producto) {

    this.productos.push(productoDetalle);
   // console.log(this.productos)
  }
  finalizar(){
    localStorage.setItem('producto',JSON.stringify(this.productos));
  }
  productos2:Producto[]=[];
  devolver() {
    var data =JSON.parse(localStorage.getItem('producto'));
    data.forEach(prod=>
    {
      this.productos2.push(prod);
    })

    console.log(this.productos2);
  }*/
