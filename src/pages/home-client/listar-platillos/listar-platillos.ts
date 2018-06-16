import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-listar-platillos',
  templateUrl: 'listar-platillos.html',
})
export class ListarPlatillosPage {



  constructor(public navCtrl: NavController,  public navParams: NavParams,
    public global: GlobalProvider , public alerta: AlertController) {
  }



  anadirPlatillo(platillo:any){

    const confirmar = this.alerta.create({
      title: 'Confirmación Plato',
      message: '¿Desea añadir plato a la orden?',
      buttons: [
      {
        text: 'Cancelar',
        handler: ()=>{

        }
      },
      {
        text: 'Confirmar',
        handler: ()=>{
           this.global.listaOrden.push(platillo);
        }

      }]
    });
      confirmar.present();
  }



}
