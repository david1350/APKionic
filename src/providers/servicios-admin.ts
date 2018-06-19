import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ServiciosAdmin {

  refListOrdenes:string;
  postCrearPlatillo:string;
  servicioConsultarPlatillo:string;

  constructor(public http:HttpClient) {

    this.refListOrdenes = 'https://swiftservicefd.000webhostapp.com/ionic-app-servicios/serviciosAdmin/wsJSONConsultarListaPedidosHechos.php';
    this.postCrearPlatillo = 'https://swiftservicefd.000webhostapp.com/ionic-app-servicios/serviciosAdmin/servicioRegistroPlatillo.php';
    this.servicioConsultarPlatillo = 'https://swiftservicefd.000webhostapp.com/ionic-app-servicios/serviciosAdmin/servicioConsultarPlatillo.php?id_platillo=44';
  }


  getListaOrdenes(){
      return this.http.get(this.refListOrdenes);
  }


  addPlatillo(platillo:any){
    return this.http.post(this.postCrearPlatillo, JSON.stringify(platillo)).subscribe(respose=>{
      return console.log(JSON.stringify(respose))
    });
  }

  consultarPlatillo (){
    return this.http.get(this.servicioConsultarPlatillo);
  }


}
