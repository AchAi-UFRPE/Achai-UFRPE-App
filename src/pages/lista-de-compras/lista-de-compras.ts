import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { ProdutosProvider } from '../../providers/services/produtosService';
import { ListaDeComprasProdutosPage } from '../lista-de-compras-produtos/lista-de-compras-produtos';

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

  listaCompras = [];
  minhaLista: any;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public produtosProvider: ProdutosProvider) {
    this.listaCompras = this.navParams.get("listaCompras"); 
    this.inicializaLista();   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeComprasPage');
  }

  inicializaLista() {
    var login = JSON.parse(localStorage.getItem('dadosLocalLogin'))    
    console.log(login.dados.id);
    var id = parseInt(login.dados.cliente.id);
    this.produtosProvider.getListas('/listaDeCompra/'+id).then(data => {
      this.minhaLista = JSON.parse(data['_body']);
      console.log(this.minhaLista);
    });
  }

  itemClicked(lista){
    this.navCtrl.push(ListaDeComprasProdutosPage, {listaId: lista.id});
  }

  public voltar():void{
    this.navCtrl.pop();
  }
  
}