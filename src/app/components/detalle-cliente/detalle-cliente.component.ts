import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../models/cliente";
import {ActivatedRoute} from "@angular/router";
import {ClientesService} from "../../services/cliente/cliente.service"
import * as moment from "moment";

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {
  clienteID: String;
  clienteDetalle: Cliente;
  constructor(private route: ActivatedRoute,
              private service: ClientesService) {
    this.clienteID = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getDataOfCliente()
  }

  getDataOfCliente(){
    this.service.getRecordById(this.clienteID).subscribe(
      data=>{
        this.clienteDetalle = data;
      },
      error=>{}
    )
  }

  cdate(fechaDesde: Date) {
    return moment(fechaDesde).utcOffset('+0300').format('DD-MM-YYYY');
  }

}
