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
import { TelaInicialClientePage } from '../pages/tela-inicial-cliente/tela-inicial-cliente';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { PerfilDoUsuarioPage } from '../pages/perfil-do-usuario/perfil-do-usuario';
import { ListaDeComprasPage } from '../pages/lista-de-compras/lista-de-compras';
import { CartaoPage } from '../pages/cartao/cartao';

//PROVIDERS
import { LoginProvider } from '../providers/services/loginService';
import { HttpModule } from '@angular/http';
import { CadastroClienteProvider } from '../providers/services/cadastroClienteService';
import { CadastroEntregadorProvider } from '../providers/services/cadastroEntregadorService';
import { ProdutosProvider } from '../providers/services/produtosService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TipocadastroPage,
    CadastroClientePage,
    CadastroEntregadorPage,
    CarrinhoPage,
    PerfilDoUsuarioPage,
    ListaDeComprasPage,
    TelaInicialClientePage,
    CartaoPage
    
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
    CadastroEntregadorPage,
    CarrinhoPage,
    PerfilDoUsuarioPage,
    ListaDeComprasPage,
    TelaInicialClientePage, 
    CartaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    CadastroClienteProvider,
    CadastroEntregadorProvider,
    ProdutosProvider
  ]
})
export class AppModule {}
