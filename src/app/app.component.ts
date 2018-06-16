import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


import { ServiceProvider } from '../providers/service-provider';
import { GlobalProvider } from '../providers/global/global';
import { LoadingController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
  ,public global: GlobalProvider, public service: ServiceProvider,
    public loadingCtrl: LoadingController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
      this.cargarServicios();
  }


    //metodo que permite cargar los servicios de la App

   cargarServicios(){

      //cargar lista platillos
      this.service.getListaPlatillos().subscribe(
      data=>this.global.platillos = data,
      err=>console.error(err)
      );

      //cargar lista ordenes_admin
      this.service.getListaOrdenes().subscribe(
      data=>this.global.listaOrdenes  = data,
      err=>console.error(err)
      );

    }


/*
//metodo para graficamente esperar un tiempo...
   cargarPlatillosLista() {
    	let loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Cargando Platillos",
      duration: 3000
     });
       loading.present();
    }
**/




}
