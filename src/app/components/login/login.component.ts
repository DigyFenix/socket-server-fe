import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "../../services/websocket.service";
import { Router } from "@angular/router";
import Usuario from "src/app/models/usuario.model";
import { NgForm } from "@angular/forms";
import Swal from "sweetalert2";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario("", "");
  constructor(
    public sws: WebsocketService,
    private router: Router,
    private sapi: ApiService
  ) { }

  ngOnInit(): void {
    this.sws.logoutWS();
  }

  valid() {
    return ((this.usuario.usuario.length > 3) && (this.usuario.password.length > 3))
  }

  login() {
    if (this.usuario.usuario && this.usuario.password) {
      this.sapi
        .login(this.usuario.usuario, this.usuario.password)
        .subscribe((data) => {
          console.log(data);

          if (data.ok) {
            this.sapi.usuario = this.usuario;
            this.sapi.guardarStorage();
            this.router.navigateByUrl("mensajes");
            //Notifico el login al servidor de socket
            this.sws
              .loginWs(this.sapi.usuario)
              .then((data) => {
               
              })
              .catch((err) => {
                Swal.fire("", "No se pudo conectar a los sockets", "error");
              });
          } else {
            Swal.fire("Error al iniciar sesion", JSON.stringify(data.error), "error");
          }
        });
    }
  }
}
