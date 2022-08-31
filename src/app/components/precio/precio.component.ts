import { Component, OnInit } from '@angular/core';
import { PrecioService } from "../../services/precio/precio.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.css']
})
export class PrecioComponent implements OnInit {

  constructor(public precioService: PrecioService) { }

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
    this.precioService.selectedPrecio = precio;
  }

}
