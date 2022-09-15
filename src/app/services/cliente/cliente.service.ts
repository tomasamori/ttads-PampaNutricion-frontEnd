import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from "../../models/cliente"
import {Observable} from "rxjs";
import {Producto} from "../../models/producto";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  URL_API = 'http://localhost:3000/api/v1/cliente';

  selectedCliente: Cliente  = {
//    idUsuario: '',
    usuario: {usuario: null},
    cuil: '',
    cuit: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: null,
    direccion: '',
    telefono: '',
    razonSocial: ''
  };

  clientes: Cliente[];

  constructor(private http: HttpClient) {
  }

  getAllCliente() {
    return this.http.get<Cliente[]>(this.URL_API);
  }

  createCliente(cliente: Cliente) {
    return this.http.post(this.URL_API, cliente);
  }

  updateCliente(cliente: Cliente) {
    return this.http.put(`${this.URL_API}/${cliente._id}`, cliente)
  }

  deletecliente(_id:string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  getRecordById(_id: String): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.URL_API}/${_id}`);
  }

}
