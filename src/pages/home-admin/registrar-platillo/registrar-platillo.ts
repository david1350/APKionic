import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosAdmin } from '../../../providers/servicios-admin';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the RegistrarPlatilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//
@IonicPage()
@Component({
  selector: 'page-registrar-platillo',
  templateUrl: 'registrar-platillo.html',
})
export class RegistrarPlatilloPage {

  datosPlatillo = {};
  nombre:string = "";
  descripcion:string = "";
  categoria:string = "";
  precio:number = 0;
  imagen:string = "./assets/img_base.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public serviciosAdmin:ServiciosAdmin,private camera: Camera) {
  }

  registrarPlatillo(){
      try{
          this.serviciosAdmin.addPlatillo(this.datosPlatillo);
        //  this.navCtrl.pop();
          alert("Registro Exitoso!")
       } catch (error) {
         alert("Error al registrar");
       }
      }

  elegirGaleria(){
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     this.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }


}
