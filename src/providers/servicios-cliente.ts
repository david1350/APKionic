import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import 'rxjs/add/operator/map'


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServiciosCliente {

  serviceEnviarPedido:string;
  servicePedidosHechos:string;
  postCrearPedido:string;


  constructor(public http:HttpClient) {
    this.serviceEnviarPedido = '';
    //cambiar Mesa
    this.servicePedidosHechos ='https://swiftservicefd.000webhostapp.com/ionic-app-servicios/serviciosCliente/wsJSONConsultarPedidosHechos.php?mesa=1';
    this.postCrearPedido = 'https://swiftservicefd.000webhostapp.com/ionic-app-servicios/serviciosCliente/servicioRegistroPedido.php';
  }


  getpedidosHechos(){
      return this.http.get(this.servicePedidosHechos);
  }

  addPedido(pedido:any){
    return this.http.post(this.postCrearPedido, JSON.stringify(pedido)).subscribe(respose=>{
      return console.log(JSON.stringify(respose))
    });
  }



}
