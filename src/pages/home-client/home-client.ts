import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomeCPage } from './home-c/home-c';
import { CategoriasPage } from './categorias/categorias';
import { ListarPlatillosPage } from './listar-platillos/listar-platillos';
import { RealizarOrdenPage } from './realizar-orden/realizar-orden';
import { ListarMisOrdenesPage } from './listar-mis-ordenes/listar-mis-ordenes';
import { AcercaDePage } from '../acerca-de/acerca-de';


@IonicPage()
@Component({
  selector: 'page-home-client',
  templateUrl: 'home-client.html',
})
export class HomeClientPage {

  @ViewChild(Nav) nav: Nav;

  inicio = HomeCPage;
  categorias = CategoriasPage;
  listarPlatillos = ListarPlatillosPage;
  realizarOrden = RealizarOrdenPage;
  listarOrdenes = ListarMisOrdenesPage;
  acerca = AcercaDePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeClientPage');
  }
  openPage(page) {
    this.nav.setRoot(page);
  }

}
