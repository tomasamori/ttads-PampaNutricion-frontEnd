import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Sucursal} from "../../models/sucursal"
@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  URL_API = 'http://localhost:3000/api/v1/sucursal';

  selectedSucursal: Sucursal = {
    nombre: '',
    direccion:'',
    localidad: ''
  };

  sucursal: Sucursal[];

  constructor(private http: HttpClient) {
  }

  getAllSucursales() {
    return this.http.get<Sucursal[]>(this.URL_API);
  }

  createSucursal(sucursal: Sucursal) {
    return this.http.post(this.URL_API, sucursal);
  }

  updateSucursal(sucursal: Sucursal) {
    return this.http.put(`${this.URL_API}/${sucursal._id}`, sucursal)
  }

  deleteSucursal(_id:String) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
