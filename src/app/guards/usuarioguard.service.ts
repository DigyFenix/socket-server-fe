import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { WebsocketService } from "../services/websocket.service";
import { ApiService } from "../services/api.service";

@Injectable({
  providedIn: "root",
})
export class UsuarioguardService implements CanActivate {
  constructor(public sApi: ApiService, private router: Router) {}

  canActivate() {
    if (this.sApi.usuario) {
      return true;
    } else {
      this.router.navigateByUrl("/");
      return false;
    }
  }
}
