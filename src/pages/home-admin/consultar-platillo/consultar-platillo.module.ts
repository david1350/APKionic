import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarPlatilloPage } from './consultar-platillo';

@NgModule({
  
  declarations: [
    ConsultarPlatilloPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarPlatilloPage),
  ],
})
export class ConsultarPlatilloPageModule {}
