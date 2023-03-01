import { Component, OnInit } from '@angular/core';
import { ProgramaService } from '../../programa.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  diaPrograma:any;
  tipoPrograma:any;
  programas:any;

  constructor(public router: Router, private route: ActivatedRoute, private ws: ProgramaService) {
    this.route.queryParams.subscribe(params => {
      if(params) {
        this.tipoPrograma = JSON.parse(params['tipoPrograma']);
        this.diaPrograma = JSON.parse(params['diaPrograma']);
      }
      console.log("El tipo de programa a listar es: " + this.tipoPrograma)
      console.log("El dia de programa a listar es: " + this.diaPrograma)
    })
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.ws.obtenerProgramaTipoFecha(this.diaPrograma, this.tipoPrograma).subscribe((data:any) => {
      this.programas = data;
    },
    (error:any)=> {console.log(error)}
    )
  }

}
