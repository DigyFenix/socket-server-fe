import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "../../services/websocket.service";
import { ApiService } from "../../services/api.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-mensajes",
  templateUrl: "./mensajes.component.html",
  styleUrls: ["./mensajes.component.css"],
})
export class MensajesComponent implements OnInit {
  constructor(public sApi: ApiService, private router:Router) {}
  
  imagen:string  = 'assets/images/login.jpg';

  ngOnInit(): void {}

  salir() {
    if(this.sApi.logout()){
      this.router.navigateByUrl('');
    };
  }
}
