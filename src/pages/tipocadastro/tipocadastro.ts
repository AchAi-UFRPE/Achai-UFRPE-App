import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';

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
cadastro_cliente():void{
  this.navCtrl.push(CadastroClientePage)
}
}
