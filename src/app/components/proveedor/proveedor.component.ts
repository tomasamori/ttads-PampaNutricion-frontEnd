import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ProveedorService} from "../../services/proveedor/proveedor.service";

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  constructor(public proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.getProveedor();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getProveedor() {
    this.proveedorService.getAllProveedor().subscribe(
      res => {
        this.proveedorService.proveedor = res;
      },
      err => console.log(err)
    )

  }

  addProveedor(form: NgForm) {
    if (form.value._id) {
      this.proveedorService.updateProveedor(form.value).subscribe(
        res => {
          form.reset();
        }
      )
    } else {
      this.proveedorService.createProveedor(form.value).subscribe(
        res => {
          this.getProveedor();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteProveedor(id:string){
    if (confirm('¿Estás seguro de eliminarlo?')) {
      this.proveedorService.deleteProveedor(id).subscribe(
        res => {
          this.getProveedor();
        },
        err => console.log(err)
      )
    }
  }

  editProveedor(proveedor) {
    this.proveedorService.selectedProveedor = proveedor;
  }

  Refrescar() {
    window.location.reload();
  }
}
