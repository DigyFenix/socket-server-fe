import { Component, OnInit, OnDestroy } from "@angular/core";
import { ChatserviceService } from "../../services/chatservice.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit, OnDestroy {
  texto: string;
  mensajesSubscription: Subscription;
  mensajes: any[] = [];
  elemento: HTMLElement;

  constructor(public chatService: ChatserviceService) {}

  ngOnInit() {
    this.elemento = document.getElementById("chat-mensajes");
    this.mensajesSubscription = this.chatService
      .escucharMensaje()
      .subscribe((data) => {
        this.mensajes.push(data);
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50);
      });
  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    this.chatService.enviarMensaje(this.texto);
    this.texto = "";
  }
}
