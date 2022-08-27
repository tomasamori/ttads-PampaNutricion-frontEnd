import { Component, OnInit } from '@angular/core';
import { SucursalService } from "../../services/sucursal/sucursal.service";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  constructor(public sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.getSucursales();
  }
  resetForm(form: NgForm)
  {
    form.reset();
  }
  getSucursales(){
    this.sucursalService.getAllSucursales().subscribe(
      res =>{
        this.sucursalService.sucursal=res;
      },err=> console.log(err)
    )
  }
  addSucursal(form:NgForm){
    if(form.value._id){
      this.sucursalService.updateSucursal(form.value).subscribe(
        res=> {
          form.reset();
        }
      )
    }else {
      this.sucursalService.createSucursal(form.value).subscribe(
        res=> {
          this.getSucursales();
          form.reset();
        },err=> console.log(err)
      );
    }
  }
  deleteSucursal(id:String)
  {
    if(confirm('¿Estas seguro de eliminarlo?')){
      this.sucursalService.deleteSucursal(id).subscribe(
        res=> {
          this.getSucursales();
        },err=>console.log(err)
      )
    }
  }
  editSucursal(sucursal) {
    this.sucursalService.selectedSucursal=sucursal;
  }
}
