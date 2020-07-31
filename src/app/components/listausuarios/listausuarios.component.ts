import { Component, OnInit } from "@angular/core";
import { ChatserviceService } from "../../services/chatservice.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-listausuarios",
  templateUrl: "./listausuarios.component.html",
  styleUrls: ["./listausuarios.component.css"],
})
export class ListausuariosComponent implements OnInit {
  
  usuariosActivosObs:Observable<any>;
  imagen:string  = 'assets/images/login.jpg';
  
  constructor(private chatService: ChatserviceService) {}

  ngOnInit(): void {
    this.chatService.getUsuarios();
    this.usuariosActivosObs = this.chatService.escucharUsuariosActivos();
    console.log(this.usuariosActivosObs);
    

  }

}
