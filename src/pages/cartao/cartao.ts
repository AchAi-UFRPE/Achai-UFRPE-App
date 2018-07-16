import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataEntregaPage } from '../data-entrega/data-entrega';

/**
 * Generated class for the CartaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartao',
  templateUrl: 'cartao.html',
})
export class CartaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartaoPage');
  }
  public voltar():void{
    this.navCtrl.pop();
  }
  public irDataEntrega():void{
    this.navCtrl.push(DataEntregaPage);
  }
}
