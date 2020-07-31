import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatserviceService } from './services/chatservice.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'serverfe';

  constructor(
    public wsService:WebsocketService,
    public chatService:ChatserviceService,
    public sapi:ApiService
  ) {
    
  }

  ngOnInit(){
    this.chatService.escucharMensajePrivado().subscribe(msj=>{
        console.log('Mensaje Privado ', msj);
    })
  };
  
}
