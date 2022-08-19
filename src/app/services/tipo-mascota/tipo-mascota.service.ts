import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TipoMascota } from "../../models/tipoMascota";

@Injectable({
  providedIn: 'root'
})
export class TipoMascotaService {

  URL_API = 'http://localhost:3000/api/v1/tipomascota';

  selectedTipoMascota: TipoMascota = {
    nombre: '',
    tamanoRaza: '',
    edad: ''
  };

  tipoMascotas: TipoMascota[];

  constructor(private http: HttpClient) {
  }

  getAllTipoMascota() {
    return this.http.get<TipoMascota[]>(this.URL_API);
  }

  createTipoMascota(tipoMascota: TipoMascota) {
    return this.http.post(this.URL_API, tipoMascota);
  }

  updateTipoMascota(tipoMascota: TipoMascota) {
    return this.http.put(`${this.URL_API}/${tipoMascota._id}`, tipoMascota)
  }

  deleteTipoMascota(_id:string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
