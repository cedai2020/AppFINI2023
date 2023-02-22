import { Component, OnInit } from '@angular/core';
import { NosotrosService } from "./nosotros.service";
import { Browser } from "@capacitor/browser";

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  semblanza!:string;
  sitio_web!:string;
  contacto!:string;
  youtube!:string;
  instagram!:string;
  facebook!:string;
  twitter!:string;

  constructor(private ws: NosotrosService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.ws.obtenerNosotros()
      .subscribe(
        (data:any)=> { 
          this.semblanza = data[0]['semblanza']; 
          this.sitio_web = data[0]['sitio_web']; 
          this.contacto = data[0]['contacto']; 
          this.youtube = data[0]['youtube']; 
          this.instagram = data[0]['instagram']; 
          this.facebook = data[0]['facebook']; 
          this.twitter = data[0]['twitter']; 
        },
        (error)=> { console.log(error); }
      )
  }

  async abrirURL(direccion:any) {
    const url = direccion
    await Browser.open({url:url}) //Es necesario colocar en tsconfig.json en el apartado de "compilerOptions" la opción de "noPropertyAccessFromIndexSignature" en false
  }

}
