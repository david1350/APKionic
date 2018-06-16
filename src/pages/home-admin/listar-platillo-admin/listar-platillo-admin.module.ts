import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarPlatilloAdminPage } from './listar-platillo-admin';

@NgModule({
  declarations: [
    ListarPlatilloAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarPlatilloAdminPage),
  ],
})
export class ListarPlatilloAdminPageModule {}
