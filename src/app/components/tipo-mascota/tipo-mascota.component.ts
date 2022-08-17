import { Component, OnInit } from '@angular/core';
import { TipoMascotaService } from "../../services/tipo-mascota.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-tipo-mascota',
  templateUrl: './tipo-mascota.component.html',
  styleUrls: ['./tipo-mascota.component.css']
})
export class TipoMascotaComponent implements OnInit {

  constructor(public tipoMascotaService: TipoMascotaService) { }

  ngOnInit(): void {
    this.getTipoMascotas();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getTipoMascotas() {
    this.tipoMascotaService.getAllTipoMascota().subscribe(
      res => {
        this.tipoMascotaService.tipoMascotas = res;
      },
      err => console.log(err)
    )

  }

  addTipoMascota(form: NgForm) {
    if (form.value._id) {
      this.tipoMascotaService.updateTipoMascota(form.value).subscribe(
        res => {
          form.reset();
        }
      )
    } else {
      this.tipoMascotaService.createTipoMascota(form.value).subscribe(
        res => {
          this.getTipoMascotas();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteTipoMascota(id:string){
    if (confirm('¿Estás seguro de eliminarlo?')) {
      this.tipoMascotaService.deleteTipoMascota(id).subscribe(
        res => {
          this.getTipoMascotas();
        },
        err => console.log(err)
      )
    }
  }

  editTipoMascota(tipoMascota) {
    this.tipoMascotaService.selectedTipoMascota = tipoMascota;
  }

}
