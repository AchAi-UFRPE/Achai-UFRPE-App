import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaDeComprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-de-compras',
  templateUrl: 'lista-de-compras.html',
})
export class ListaDeComprasPage {

  listaCompras = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listaCompras = this.navParams.get("listaCompras");
    console.log(this.listaCompras);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeComprasPage');
  }

}
