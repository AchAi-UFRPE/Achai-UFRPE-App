import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-entregador',
  templateUrl: 'cadastro-entregador.html',
})
export class CadastroEntregadorPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEntregadorPage');
  }

}
