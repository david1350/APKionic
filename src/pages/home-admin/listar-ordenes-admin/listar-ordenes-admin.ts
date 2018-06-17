import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ListarOrdenesAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-ordenes-admin',
  templateUrl: 'listar-ordenes-admin.html',
})
export class ListarOrdenesAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public global: GlobalProvider, public alerta: AlertController) {
  }


  cambiarEstadoPedido (){

    const confirmar = this.alerta.create({
      title: 'Cambiar Estado',
      message: '¿Desea cambiar Estado de la orden a ENTREGADO?',
      buttons: [
      {
        text: 'Atrás',
        handler: ()=>{
        }
      },
      {
        text: 'Cambiar',
        handler: ()=>{
        }

      }]
    });
      confirmar.present();
  }

}
