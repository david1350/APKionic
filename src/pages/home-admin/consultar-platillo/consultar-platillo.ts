import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerPlatilloPage} from './ver-platillo/ver-platillo'
import { EditarPlatilloPage } from './editar-platillo/editar-platillo'
import { EliminarPlatilloPage} from './eliminar-platillo/eliminar-platillo'

/**
 * Generated class for the ConsultarPlatilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-platillo',
  templateUrl: 'consultar-platillo.html',
})
export class ConsultarPlatilloPage {

    verPlatillo = VerPlatilloPage;
    editarPlatillo = EditarPlatilloPage;
    eliminarPlatillo = EliminarPlatilloPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarPlatilloPage');
  }

}
