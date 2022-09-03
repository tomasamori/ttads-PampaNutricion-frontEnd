import { Component, OnInit } from '@angular/core';
import { PrecioService } from "../../services/precio/precio.service";
import { NgForm } from "@angular/forms";
import * as moment from 'moment';

@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.css']
})
export class PrecioComponent implements OnInit {

  constructor(public precioService: PrecioService) {  }

  ngOnInit(): void {
    this.getPrecios();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getPrecios() {
    this.precioService.getAllPrecio().subscribe(
      res => {
        this.precioService.precio = res;
      },
      err => console.log(err)
    )

  }

  addPrecio(form: NgForm) {
    if (form.value._id) {
      this.precioService.updatePrecio(form.value).subscribe(
        res => {
          this.getPrecios();
          form.reset();
        }
      )
    } else {
      this.precioService.createPrecio(form.value).subscribe(
        res => {
          this.getPrecios();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deletePrecio(id:String){
    if (confirm('¿Estás seguro de eliminarlo?')) {
      this.precioService.deletePrecio(id).subscribe(
        res => {
          this.getPrecios();
        },
        err => console.log(err)
      )
    }
  }

  editPrecio(precio) {
    this.precioService.selectedPrecio._id = precio._id;
    // @ts-ignore
    this.precioService.selectedPrecio.fechaDesde = moment(precio.fechaDesde).add(1, 'days').format('YYYY-MM-DD')//(moment(precio.fechaDesde).format('YYYY-MM-DD'));
    this.precioService.selectedPrecio.valor = precio.valor;
  }

  cdate(fechaDesde: Date) {
    return moment(fechaDesde).utcOffset('+0300').format('DD-MM-YYYY');
  }
}
