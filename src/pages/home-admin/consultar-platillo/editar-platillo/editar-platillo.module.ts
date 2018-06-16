import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPlatilloPage } from './editar-platillo';

@NgModule({
  declarations: [
    EditarPlatilloPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPlatilloPage),
  ],
})
export class EditarPlatilloPageModule {}
