import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MinhasEntregasPage } from '../minhas-entregas/minhas-entregas';
import { PerfilDoEntregadorPage } from '../perfil-do-entregador/perfil-do-entregador';

/**
 * Generated class for the TelaInicialEntregadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-inicial-entregador',
  templateUrl: 'tela-inicial-entregador.html',
})
export class TelaInicialEntregadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaInicialEntregadorPage');
  }

  irPesquisa(){this.navCtrl.push(MinhasEntregasPage);} //alterar caminho


  irPerfil(){this.navCtrl.push(PerfilDoEntregadorPage);}


  irLista(){this.navCtrl.push(MinhasEntregasPage);}

}
