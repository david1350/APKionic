import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosAdmin } from '../../../../providers/servicios-admin';

/**
 * Generated class for the VerPlatilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-platillo',
  templateUrl: 'ver-platillo.html',
})
export class VerPlatilloPage {

  platilloBuscado:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public servicio : ServiciosAdmin) {
  }

  buscarPlatillo (){
    this.servicio.consultarPlatillo().subscribe(
    data=>this.platilloBuscado = data,
    err=>console.error(err)
    );
    //console.log(this.platilloBuscado);
    this.getDatos();
  }

  getDatos (){
    var nombre = document.getElementById("nombre").nodeValue;
    console.log(nombre);
  }


}
