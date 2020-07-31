import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MensajesComponent } from "./components/mensajes/mensajes.component";
import { UsuarioguardService } from "./guards/usuarioguard.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "mensajes",
    component: MensajesComponent,
    canActivate: [UsuarioguardService],
  },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
