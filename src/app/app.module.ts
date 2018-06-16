import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HomeAdminPage} from '../pages/home-admin/home-admin';
import { HomeClientPage} from '../pages/home-client/home-client';



import { CategoriasPage } from '../pages/home-client/categorias/categorias';
import { PlatillosPrincipalesPage } from '../pages/home-client/categorias/platillos-principales/platillos-principales';
import { EnsaladasPage } from "../pages/home-client/categorias/ensaladas/ensaladas";
import { PostresPage } from "../pages/home-client/categorias/postres/postres";
import { ListarPlatillosPage } from '../pages/home-client/listar-platillos/listar-platillos';
import { RealizarOrdenPage } from '../pages/home-client/realizar-orden/realizar-orden';
import { ListarMisOrdenesPage } from '../pages/home-client/listar-mis-ordenes/listar-mis-ordenes';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { HttpModule} from "@angular/http";
import { HttpClientModule} from '@angular/common/http';
import { ServiceProvider } from '../providers/service-provider';
import { GlobalProvider } from '../providers/global/global';
import { ConsultarPlatilloPage } from '../pages/home-admin/consultar-platillo/consultar-platillo';
import { VerPlatilloPage } from '../pages/home-admin/consultar-platillo/ver-platillo/ver-platillo';
import { EditarPlatilloPage } from '../pages/home-admin/consultar-platillo/editar-platillo/editar-platillo';
import { EliminarPlatilloPage }  from '../pages/home-admin/consultar-platillo/eliminar-platillo/eliminar-platillo';
import { ListarOrdenesAdminPage } from '../pages/home-admin/listar-ordenes-admin/listar-ordenes-admin';
import { RegistrarPlatilloPage } from '../pages/home-admin/registrar-platillo/registrar-platillo';
import { ListarPlatilloAdminPage } from '../pages/home-admin/listar-platillo-admin/listar-platillo-admin';

import { HomeAPage} from '../pages/home-admin/home-a/home-a';
import { HomeCPage} from '../pages/home-client/home-c/home-c';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    HomeAdminPage,
    HomeClientPage ,

    CategoriasPage,
    PlatillosPrincipalesPage,
    EnsaladasPage,
    PostresPage,

    ListarPlatillosPage,
    RealizarOrdenPage,
    ListarMisOrdenesPage,
    AcercaDePage,

    ConsultarPlatilloPage,
    VerPlatilloPage,
    EditarPlatilloPage,
    EliminarPlatilloPage,


    ListarOrdenesAdminPage,
    ListarPlatilloAdminPage,
    RegistrarPlatilloPage,
    HomeAPage,
    HomeCPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    HomeAdminPage,
    HomeClientPage,

    CategoriasPage,
    PlatillosPrincipalesPage,
    EnsaladasPage,
    PostresPage,

    ListarPlatillosPage,
    RealizarOrdenPage,
    ListarMisOrdenesPage,
    AcercaDePage,

    ConsultarPlatilloPage,
    VerPlatilloPage,
    EditarPlatilloPage,
    EliminarPlatilloPage,


    ListarOrdenesAdminPage,
    ListarPlatilloAdminPage,
    RegistrarPlatilloPage,
    HomeAPage,
    HomeCPage
  ],

  providers: [
    ListarPlatillosPage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    GlobalProvider
  ]
})
export class AppModule {}
