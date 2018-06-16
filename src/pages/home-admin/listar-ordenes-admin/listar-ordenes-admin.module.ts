import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarOrdenesAdminPage } from './listar-ordenes-admin';

@NgModule({
  declarations: [
    ListarOrdenesAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarOrdenesAdminPage),
  ],
})
export class ListarOrdenesAdminPageModule {}
