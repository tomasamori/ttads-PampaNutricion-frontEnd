import { Component, OnInit } from '@angular/core';
import { LocalidadService } from "../../services/localidad/localidad.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {

  constructor(public localidadService: LocalidadService) { }

  ngOnInit(): void {
    this.getLocalidades();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getLocalidades() {
    this.localidadService.getAllLocalidad().subscribe(
      res => {
        this.localidadService.localidades = res;
      },
      err => console.log(err)
    )

  }

  addlocalidad(form: NgForm) {
    if (form.value._id) {
      this.localidadService.updateLocalidad(form.value).subscribe(
        res => {
          form.reset();
        }
      )
    } else {
      this.localidadService.createLocalidad(form.value).subscribe(
        res => {
          this.getLocalidades();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteLocalidad(id:string){
    if (confirm('¿Estás seguro de eliminarlo?')) {
      this.localidadService.deletelocalidad(id).subscribe(
        res => {
          this.getLocalidades();
        },
        err => console.log(err)
      )
    }
  }

  editLocalidad(localidad) {
    this.localidadService.selectedLocalidad = localidad;
    this.getLocalidades();

  }

}
