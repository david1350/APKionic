import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/global/global';


@IonicPage()
@Component({
  selector: 'page-listar-platillo-admin',
  templateUrl: 'listar-platillo-admin.html',
})
export class ListarPlatilloAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarPlatilloAdminPage');
  }

}
