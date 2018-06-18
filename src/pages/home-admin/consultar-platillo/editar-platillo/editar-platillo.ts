import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditarPlatilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-platillo',
  templateUrl: 'editar-platillo.html',
})
export class EditarPlatilloPage {

  platillo:boolean = false;
  ensalada:boolean = false;
  postre:boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPlatilloPage');
  }
  platillo(){
    this.platillo = true ;
    this.ensalada = false;
    this.postre = false;
  }
  ensalada(){
    this.platillo = false ;
    this.ensalada = true;
    this.postre = false;
  }
  postre(){
    this.platillo = false ;
    this.ensalada = false;
    this.postre = true;
  }

}
