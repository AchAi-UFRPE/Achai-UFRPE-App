import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/services/produtosService';
import { CarrinhoPage } from '../carrinho/carrinho';


/**
 * Generated class for the ListaDeComprasProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-de-compras-produtos',
  templateUrl: 'lista-de-compras-produtos.html',
})
export class ListaDeComprasProdutosPage {

  items: any;
  lista: any;
  idLista: any;
  listaCarrinho = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController) {
      this.idLista = navParams.get('listaId')
      this.inicializaLista()                
  }

  inicializaLista() {    
    this.produtosProvider.getProdutos('/listaDeProdutos/lista/'+this.idLista).then(data => {
      this.lista = JSON.parse(data['_body']);
      if (this.lista[0]!= null) {
        this.initializeItems();
      }
    });
  }

  initializeItems() {
    this.items = this.lista;
  }

  public voltar(){
    this.navCtrl.pop();
  }

  show(){
  
    this.navCtrl.push(CarrinhoPage, {listaCarrinho: this.items});

  }

}
