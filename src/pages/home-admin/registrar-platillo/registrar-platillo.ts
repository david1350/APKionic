import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosAdmin } from '../../../providers/servicios-admin';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';

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
  public serviciosAdmin:ServiciosAdmin,private camera: Camera,
private alertController: AlertController) {

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

    opcionCapturaImagen(){
      console.log("capturando")
    let myAlert = this.alertController.create({
    title: 'Elegir Captura Imagen',
    enableBackdropDismiss: true ,
      message:'elija la opción de preferencia para cargar imagen.',
      buttons:[
      {
      text: 'elegir',
      handler: data => {

        if(data=='galeria'){
          this.elegirGaleria();
        }
        if(data=='camara'){
          this.elegirCamara();
        }
          },
      },
      {
      text: 'Cancelar',
      handler: data => {
          },      }
      ],
      inputs:[
      {
      type: 'radio',
      id: 'camara',
      name: 'camara',
      'label': 'camara',
      value: 'camara',
      'checked': false
      },
      {
      type: 'radio',
      id: 'galeria',
      name: 'galeria',
      'label': 'galeria',
      value: 'galeria',
      'checked': false
      }
      ]
      });
      myAlert.present();
    }

  elegirCamara(){
      const options: CameraOptions = {
      quality: 70,
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

  elegirGaleria(){
    const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum:false
  }

  this.camera.getPicture(options).then((imageData) => {
   this.imagen = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   console.log('error_elegir_galeria')
  });

  }


}
