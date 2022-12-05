import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Producto } from "../../models/producto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_API = 'http://localhost:3000/api/v1/producto';

  selectedProducto: Producto = {
    marca:'',
    nombre: '',
    descripcion:'',
    peso:'',
    imgUrl:'',
    tipoMascota: {tipoMascota: ''},
    precio: {id:'',fechaDesde:new Date(),valor:0},
    categoria: '',
    promo:0
  };

  producto: Producto[];

  constructor(private http: HttpClient) {
  }

  getAllProducto() {
    return this.http.get<Producto[]>(this.URL_API);
  }

  createProducto(producto: Producto) {
    return this.http.post(this.URL_API, producto);
  }

  updateProducto(producto: Producto) {
    return this.http.put(`${this.URL_API}/${producto._id}`, producto)
  }

  deleteProducto(_id:string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  getRecordById(_id: String): Observable<Producto>{
    return this.http.get<Producto>(`${this.URL_API}/${_id}`);
  }
}
