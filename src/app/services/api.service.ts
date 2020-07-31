import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ResponseInterface } from "../models/response.interface";
import Usuario from "../models/usuario.model";
import { WebsocketService } from "./websocket.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public usuario: Usuario;
  private urlApis = "http://localhost:5000/";
  private urlLogin = this.urlApis + "login/";

  constructor(private http: HttpClient, private sWs: WebsocketService) {
    this.cargarStorage();
  }

  login(user: string, password: string) {
    let data = { user, password };
    return this.http.post<ResponseInterface>(`${this.urlLogin}`, data);
  }

  logout(): Boolean {
    this.usuario = null;
    this.eliminarStorage();
    this.sWs.logoutWS();
    return true;
  }

  guardarStorage() {
    localStorage.setItem("usuario", JSON.stringify(this.usuario));
  }

  eliminarStorage() {
    localStorage.removeItem("usuario");
  }

  cargarStorage() {
    if (localStorage.getItem("usuario")) {
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
      this.sWs.loginWs(this.usuario);
    }
  }
}
