export interface Cliente {
//  idUsuario: string,
  usuario: {usuario: string},
  cuil: string,
  cuit: string,
  nombre: string,
  apellido: string,
  fechaNacimiento: Date,
  direccion: string,
  telefono: string,
  razonSocial: string,

  createdAt?: string,
  updatedAt?: string,
  _id?: string
}
