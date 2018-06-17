import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


import { ServiciosGenerales } from '../providers/servicios-generales';
import { ServiciosAdmin } from '../providers/servicios-admin';
import { ServiciosCliente } from '../providers/servicios-cliente';

import { GlobalProvider } from '../providers/global/global';
import { LoadingController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
  ,public global: GlobalProvider, public serviciosGenerales: ServiciosGenerales,
   public serviciosAdmin:ServiciosAdmin,
   public serviciosCliente:ServiciosCliente,
   public loadingCtrl: LoadingController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
      this.cargarServiciosGenerales();
      this.cargarServiciosAdmin();
      //get-CLIENTE
      this.getServiciosCliente();
  }


    //metodo que permite cargar los servicios de la App

    cargarServiciosGenerales(){

      //cargar lista platillos
      this.serviciosGenerales.getListaPlatillos().subscribe(
      data=>this.global.platillos = data,
      err=>console.error(err)
      );
    }



    cargarServiciosAdmin (){
      this.serviciosAdmin.getListaOrdenes().subscribe(
      data=>this.global.listaOrdenes  = data,
      err=>console.error(err)
      );

    }



//METODOS GET CLIENTE.
    getServiciosCliente (){
      this.serviciosCliente.getpedidosHechos().subscribe(
        data=>this.global.pedidosMesa = data,
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
