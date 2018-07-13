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
import { TelaInicialEntregadorPage } from '../pages/tela-inicial-entregador/tela-inicial-entregador';
import { PerfilDoEntregadorPage } from '../pages/perfil-do-entregador/perfil-do-entregador';
import { HomeEntregadorPage } from '../pages/home-entregador/home-entregador';
import { MinhasEntregasPage } from '../pages/minhas-entregas/minhas-entregas';
import { ListaDeComprasProdutosPage } from '../pages/lista-de-compras-produtos/lista-de-compras-produtos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeEntregadorPage,
    LoginPage,
    TipocadastroPage,
    CadastroClientePage,
    CadastroEntregadorPage,
    CarrinhoPage,
    PerfilDoUsuarioPage,
    PerfilDoEntregadorPage,
    ListaDeComprasPage,
    TelaInicialClientePage,
    TelaInicialEntregadorPage,
    MinhasEntregasPage,
    CartaoPage,
    ListaDeComprasProdutosPage
    
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
    HomeEntregadorPage,
    LoginPage,
    TipocadastroPage,
    CadastroClientePage,
    CadastroEntregadorPage,
    CarrinhoPage,
    PerfilDoUsuarioPage,
    PerfilDoEntregadorPage,
    ListaDeComprasPage,
    TelaInicialClientePage,
    TelaInicialEntregadorPage,
    MinhasEntregasPage,
    CartaoPage,
    ListaDeComprasProdutosPage
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
