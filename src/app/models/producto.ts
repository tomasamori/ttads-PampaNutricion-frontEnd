export interface Producto {
  marca: string,
  nombre: string,
  descripcion: string,
  peso: string,
  imgUrl: string,
  tipoMascota: {tipoMascota: string},
  //precio: {precio: string},
  precio:{id:string,fechaDesde:Date,valor:number},
  categoria: string,
  promo: number,
  _id?: string,
  cantidad?:number
}
