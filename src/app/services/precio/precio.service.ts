import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Precio } from "../../models/precio";

@Injectable({
  providedIn: 'root'
})
export class PrecioService {

  URL_API = 'http://localhost:3000/api/v1/precio';

  selectedPrecio: Precio = {
    fechaDesde: null,
    valor: 0
  };

  precio: Precio[];

  constructor(private http: HttpClient) {
  }

  getAllPrecio() {
    return this.http.get<Precio[]>(this.URL_API);
  }

  createPrecio(precio: Precio) {
    return this.http.post(this.URL_API, precio);
  }

  updatePrecio(precio: Precio) {
    return this.http.put(`${this.URL_API}/${precio._id}`, precio)
  }

  deletePrecio(_id:String) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
