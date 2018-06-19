import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';
import { ServiciosCliente } from '../../../providers/servicios-cliente';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RealizarOrdenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realizar-orden',
  templateUrl: 'realizar-orden.html',
})
export class RealizarOrdenPage {

	date = new Date();
  costoPedido:number;
  datosPedido = {};
  mesa:string;
  observaciones:string;
  costo_total:string;
  fecha:string;
  estado:string;
  productos:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public global: GlobalProvider, public alerta: AlertController,
  public serviciosCliente: ServiciosCliente) {
      this.costoPedido = 0;
      this.calcularCostoPedido();
  }

 calcularCostoPedido (){
     for (let platillo of this.global.listaOrden) {
        this.costoPedido+=parseInt(platillo.precio);
     }
  }

  enviarPedido (){
    try{

        this.serviciosCliente.addPedido(this.datosPedido);
      //  this.navCtrl.pop();
        alert("Registro Exitoso!")
        this.global.listaOrden = [];
        this.costoPedido = 0;
     } catch (error) {
       alert("Error al registrar");
     }
  }


   puedeHacerPedido (){
    if (this.global.listaOrden.length>=1){
    return true;
    }else{
    return false;
    }
  }


  removerPlatillo(platillo){

    const confirmar = this.alerta.create({
      title: 'Eliminar Plato',
      message: '¿Desea eliminar plato de la orden?',
      buttons: [
      {
        text: 'Atrás',
        handler: ()=>{
        }
      },
      {
        text: 'Remover',
        handler: ()=>{
           this.costoPedido-=parseInt(platillo.precio);
           this.global.listaOrden.splice(platillo,1);
        }

      }]
    });
      confirmar.present();
  }

}
