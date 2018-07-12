import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaInicialEntregadorPage } from '../tela-inicial-entregador/tela-inicial-entregador';
import { MinhasEntregasPage } from '../minhas-entregas/minhas-entregas';

/**
 * Generated class for the HomeEntregadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-entregador',
  templateUrl: 'home-entregador.html',
})
export class HomeEntregadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeEntregadorPage');
  }

  goToPerfil(){
    this.navCtrl.push(TelaInicialEntregadorPage);
  }

  goToMinhasEntregas(){
    this.navCtrl.push(MinhasEntregasPage);
  }

  

}
