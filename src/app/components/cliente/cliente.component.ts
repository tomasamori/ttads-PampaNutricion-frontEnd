import { Component, OnInit } from '@angular/core';
import { ClientesService } from  "../../services/cliente/cliente.service"
import { NgForm } from "@angular/forms";
import {Router} from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public clienteService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.getClientes();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getClientes() {
    this.clienteService.getAllCliente().subscribe(
      res => {
        this.clienteService.clientes = res;
        console.log(res);
      },
      err => console.log(err)
    )

  }

  addCliente(form: NgForm) {
    if (form.value._id) {
      this.clienteService.updateCliente(form.value).subscribe(
        res => {
          form.reset();
        }
      )
    } else {
      this.clienteService.createCliente(form.value).subscribe(
        res => {
          this.getClientes();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteCliente(id:string){
    if (confirm('¿Estás seguro de eliminarlo?')) {
      this.clienteService.deletecliente(id).subscribe(
        res => {
          this.getClientes();
        },
        err => console.log(err)
      )
    }
  }

  editCliente(cliente) {
    this.clienteService.selectedCliente = cliente;
  }

  cdate(fechaDesde: Date) {
    return moment(fechaDesde).utcOffset('+0300').format('DD-MM-YYYY');
  }

  OpenDetails(id){
    this.router.navigate([`/detalle-cliente/${id}`])
  }

}
