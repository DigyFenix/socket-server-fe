import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imagen",
})
export class ImagenPipe implements PipeTransform {
  transform(imagen: string): string {
    if (!imagen) {
      return "assets/imagenes/imgnotfound.png";
    }
    //console.log('Pipe Imagen:'+this.sqlservice.getUrlImgs()+imagen);
    return imagen;
  }

  
}
