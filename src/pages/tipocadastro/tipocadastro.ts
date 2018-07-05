import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';
import { CadastroEntregadorPage } from '../cadastro-entregador/cadastro-entregador';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-tipocadastro',
  templateUrl: 'tipocadastro.html',
})
export class TipocadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipocadastroPage');
  }
  
  public cadastro_cliente():void{
    this.navCtrl.push(CadastroClientePage)
  }
  public voltar():void{
    this.navCtrl.pop();
  }
  public cadastro_entregador():void{
    this.navCtrl.push(CadastroEntregadorPage)
  }

}
