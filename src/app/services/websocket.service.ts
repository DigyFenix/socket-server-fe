import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Router } from "@angular/router";
import { SocketEvents } from "./SocketEvents";
import Usuario from "../models/usuario.model";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class WebsocketService {
  public socketStatus = false;

  constructor(
    private socket: Socket,
    private router: Router
  ) {
    this.verificarEstado();
  }

  verificarEstado() {
    this.socket.on(SocketEvents.CONNECT, () => {
      this.socketStatus = true;
    });

    this.socket.on(SocketEvents.DISCONNECT, () => {
      console.log("Desconectado del servidor socket");
      this.socketStatus = false;
    });
  }

  emit(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }

  escuchar(evento: string) {
    return this.socket.fromEvent(evento);
  }

  loginWs(usuario: Usuario) {
    return new Promise((rs, rj) => {
      this.emit(SocketEvents.CONFIGURAR_USUARIO, usuario, (resp) => {
        rs();
      });
    });
  }

  logoutWS() {
    this.emit(SocketEvents.DESCONECTAR_USUARIO, () => {});
  }
}
