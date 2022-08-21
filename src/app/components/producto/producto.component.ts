import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../services/producto/producto.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getProductos() {
    this.productoService.getAllProducto().subscribe(
      res => {
        this.productoService.producto = res;
      },
      err => console.log(err)
    )

  }

  addProducto(form: NgForm) {
    if (form.value._id) {
      this.productoService.updateProducto(form.value).subscribe(
        res => {
          form.reset();
        }
      )
    } else {
      this.productoService.createProducto(form.value).subscribe(
        res => {
          this.getProductos();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteProducto(id:string){
    if (confirm('¿Estás seguro de eliminarlo?')) {
      this.productoService.deleteProducto(id).subscribe(
        res => {
          this.getProductos();
        },
        err => console.log(err)
      )
    }
  }

  editProducto(producto) {
    this.productoService.selectedProducto = producto;
  }

}
