import { Component, OnInit } from '@angular/core';
import {Producto} from "../../models/producto";
import {ActivatedRoute} from "@angular/router";
import {ProductoService} from "../../services/producto/producto.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  productID: String;
  productoDetalle: Producto;
  constructor(private route: ActivatedRoute,
              private service: ProductoService) {
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

}
