import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosAdmin } from '../../../providers/servicios-admin';

/**
 * Generated class for the RegistrarPlatilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//
@IonicPage()
@Component({
  selector: 'page-registrar-platillo',
  templateUrl: 'registrar-platillo.html',
})
export class RegistrarPlatilloPage {

  datosPlatillo:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public serviciosAdmin:ServiciosAdmin) {
  }

  registrarPlatillo(){
    this.datosPlatillo = "nombre=lucas&descripcion=aa";
    this.serviciosAdmin.addPlatillo(this.datosPlatillo);
  }

}
