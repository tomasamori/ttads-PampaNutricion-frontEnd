import { Injectable } from '@angular/core';
import {Localidad} from "../../models/localidad";
import {HttpClient} from "@angular/common/http";
import {Proveedor} from "../../models/proveedor";

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  URL_API = 'http://localhost:3000/api/v1/proveedor';

  selectedProveedor: Proveedor = {
    cuil: '',
    cuit: '',
    razonSocial: '',
    email:'',
    telefono:''
  };

  proveedor: Proveedor[];

  constructor(private http: HttpClient) {
  }

  getAllProveedor() {
    return this.http.get<Proveedor[]>(this.URL_API);
  }

  createProveedor(proveedor: Proveedor) {
    return this.http.post(this.URL_API, proveedor);
  }

  updateProveedor(proveedor: Proveedor) {
    return this.http.put(`${this.URL_API}/${proveedor._id}`, proveedor)
  }

  deleteProveedor(_id:string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}


