import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomeAdminPage } from '../home-admin/home-admin';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string="";
  password:string="";
  myForm: FormGroup;
  validacion:boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder) {
      this.myForm = this.fb.group({
        usuario: ['', [Validators.required]],
        contraseña: ['', [Validators.pattern(/^[a-z0-9_-]{3,6}$/)]],
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ingresar(){
    if(this.usuario === "admin"){
      if(this.password === "123"){
        this.navCtrl.push(HomeAdminPage);
        this.validacion = false;
      }
    }
    else {
      this.validacion = true;
    }
  }
  guardarDatos(){
    alert(JSON.stringify(this.myForm.value));
  }

}
