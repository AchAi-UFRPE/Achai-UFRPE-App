import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/services/produtosService';
import { HomePage } from '../home/home';

/**
 * Generated class for the DataEntregaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-entrega',
  templateUrl: 'data-entrega.html',
})
export class DataEntregaPage {

  myDate: any;
  myHrr: any;

  dados = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtosProvider: ProdutosProvider) {
    this.dados = this.navParams.get('Dados');
    console.log(this.dados);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataEntregaPage');
  }

  voltar(){
    this.navCtrl.pop();
  }

  showDate(){
    console.log(this.myDate);
    console.log(this.myHrr);
    this.dados['data'] = this.myDate;
    this.dados['hora'] = this.myHrr;
    console.log(this.dados);
    this.produtosProvider.postLista('/pedidos', this.dados ).then(data =>{
      console.log(data);
      this.navCtrl.push(HomePage);
    });

  }

}
