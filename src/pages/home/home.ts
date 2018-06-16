import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { HomeClientPage } from '../home-client/home-client';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
  }

  administrador(){
      this.navCtrl.push(LoginPage);
  }
  cliente(){
      this.navCtrl.push(HomeClientPage)
  }


}
