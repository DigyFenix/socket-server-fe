import { Injectable } from "@angular/core";
import { WebsocketService } from "./websocket.service";
import { ApiService } from "./api.service";
import { SocketEvents } from "./SocketEvents";

@Injectable({
  providedIn: "root",
})
export class ChatserviceService {
  constructor(public sWs: WebsocketService, public sApi: ApiService) {}

  enviarMensaje(mensaje: string) {
    const payload = {
      de: this.sApi.usuario.usuario,
      mensaje,
    };
    this.sWs.emit(SocketEvents.MENSAJE_TODOS, payload);
  }

  escucharMensaje() {
    return this.sWs.escuchar(SocketEvents.MENSAJE_TODOS);
  }

  escucharMensajePrivado() {
    return this.sWs.escuchar(SocketEvents.MENSAJE_PRIVADO);
  }

  escucharUsuariosActivos() {
    return this.sWs.escuchar(SocketEvents.USUARIOS_CONECTADOS);
  }

  getUsuarios() {
    return this.sWs.emit(SocketEvents.USUARIOS_CONECTADOS);
  }
}
