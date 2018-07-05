import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ListaDeComprasPage } from '../lista-de-compras/lista-de-compras';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-tela-inicial-cliente',
  templateUrl: 'tela-inicial-cliente.html',
})
export class TelaInicialClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaInicialClientePage');
  }

  public voltar():void{
    this.navCtrl.pop();
  }

  public irLista():void{
    this.navCtrl.push(ListaDeComprasPage);
  }
  
  public irPesquisa():void{
    this.navCtrl.push(HomePage);
  }
}
