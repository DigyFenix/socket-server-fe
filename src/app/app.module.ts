import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsURL, options: {} };
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { ListausuariosComponent } from './components/listausuarios/listausuarios.component';
import { LoginComponent } from './components/login/login.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagenPipe } from './components/pipes/imagen.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListausuariosComponent,
    LoginComponent,
    MensajesComponent,
    RegistroComponent,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
