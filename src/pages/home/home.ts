import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/services/produtosService';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  DadosLogin = {};
  items: any;
  lista: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    public alertCtrl: AlertController) {
      this.inicializaLista()  
  }

  inicializaLista() {
    this.produtosProvider.getProdutos('/users').then(data => {
      this.lista = JSON.parse(data['_body']);
      if (this.lista[0]!= null) {
        this.initializeItems();
      }
    });
  }

  initializeItems() {
    this.items = this.lista;
  }

  itemClicked(){
    const alert = this.alertCtrl.create({
      title: 'Deseja adicionar o item ao carrinho?',      
      buttons: ['Sim','Não']
    });
    alert.present();
  }

  getItens(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.cpf.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}


