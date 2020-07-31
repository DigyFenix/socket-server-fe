export default class Usuario {
  public usuario: string;
  public nombre: string;
  public password: string;
  public imagen: string;

  constructor(usuario: string, nombre: string) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.imagen = 'assets/imagenes/login.jpg'
  }

}