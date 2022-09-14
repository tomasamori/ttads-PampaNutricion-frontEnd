import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../services/producto/producto.service";
import { NgForm } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  constructor(public productoService: ProductoService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProductos();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getProductos() {
    this.productoService.getAllProducto().subscribe(
      data => {
        this.productoService.producto = data;
      },
      err => console.log(err)
    )
  }

  OpenDetails(id){
    this.router.navigate([`/detalle/${id}`])
  }

}
