import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientePage');
  }

}
