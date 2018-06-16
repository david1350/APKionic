import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';
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
    public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarOrdenesAdminPage');
  }

}
