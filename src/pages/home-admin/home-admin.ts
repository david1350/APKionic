import { Component,ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsultarPlatilloPage } from './consultar-platillo/consultar-platillo';
//import { VerPlatilloPage } from './consultar-platillo/ver-platillo/ver-platillo';
//import { EditarPlatilloPage } from './consultar-platillo/editar-platillo/editar-platillo';
//import { EliminarPlatilloPage }  from './consultar-platillo/eliminar-platillo/eliminar-platillo';
import { ListarOrdenesAdminPage } from './listar-ordenes-admin/listar-ordenes-admin';
import { RegistrarPlatilloPage } from './registrar-platillo/registrar-platillo';
import { ListarPlatilloAdminPage } from './listar-platillo-admin/listar-platillo-admin';
import { AcercaDePage } from '../acerca-de/acerca-de';
import { HomeAPage} from './home-a/home-a';

@IonicPage()
@Component({
  selector: 'page-home-admin',
  templateUrl: 'home-admin.html',
})
export class HomeAdminPage {

@ViewChild(Nav) nav: Nav;
  inicio = HomeAPage;
  registrarPlatillo = RegistrarPlatilloPage;
  consultarPlatillo = ConsultarPlatilloPage;
  listarPlatillos = ListarPlatilloAdminPage;
  listarOrdenes = ListarOrdenesAdminPage;
  acerca = AcercaDePage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAdminPage');
  }
  openPage(page) {
    this.nav.setRoot(page);
  }

}
