import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//PAGES
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { TipocadastroPage } from '../pages/tipocadastro/tipocadastro'
import { CadastroClientePage } from '../pages/cadastro-cliente/cadastro-cliente';
import { CadastroEntregadorPage } from '../pages/cadastro-entregador/cadastro-entregador';

//PROVIDERS
import { LoginProvider } from '../providers/services/loginService';
import { HttpModule } from '@angular/http';
import { CadastroClienteProvider } from '../providers/services/cadastroClienteService';
import { CadastroEntregadorProvider } from '../providers/services/cadastroEntregadorService';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TipocadastroPage,
    CadastroClientePage,
    CadastroEntregadorPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TipocadastroPage,
    CadastroClientePage,
    CadastroEntregadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    CadastroClienteProvider,
    CadastroEntregadorProvider
  ]
})
export class AppModule {}
