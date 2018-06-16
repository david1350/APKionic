import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeClientPage } from './home-client';

@NgModule({
  declarations: [
    HomeClientPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeClientPage),
  ],
})
export class HomeClientPageModule {}
