/*
import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductoService} from "../../services/producto/producto.service";
import {Producto} from "../../models/producto";

@Component({
  selector: 'carrito',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})

export class PagenotfoundComponent implements OnInit {
  productID: String;
  productoDetalle: Producto;
  constructor(private route: ActivatedRoute,
              private service: ProductoService) {
    this.productID = this.route.snapshot.params["id"];
  }

  /*
  ngOnInit(): void {
    this.getDataOfProduct()
  }
*/
  /*
  getDataOfProduct(){
      this.service.getRecordById(this.productID).subscribe(
        data=>{
            this.productoDetalle = data;
        },
        error => {}
      )
  }
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
