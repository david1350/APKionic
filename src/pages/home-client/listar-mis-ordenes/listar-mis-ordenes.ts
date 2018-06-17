import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';
/**
 * Generated class for the ListarMisOrdenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-mis-ordenes',
  templateUrl: 'listar-mis-ordenes.html',
})
export class ListarMisOrdenesPage {

    costoTotalOrdenes:number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public global: GlobalProvider ) {
    this.costoTotalOrdenes = 0;
    this.calcularCostoTotalOrdenes();

  }

  calcularCostoTotalOrdenes (){
    for (let platillo of this.global.pedidosMesa) {
        this.costoTotalOrdenes+=parseInt(platillo.costo_total);
    }
  }


}
