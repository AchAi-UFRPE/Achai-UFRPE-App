import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/services/produtosService';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PerfilDoUsuarioPage } from '../perfil-do-usuario/perfil-do-usuario';
import { ActionSheetController } from 'ionic-angular'
import { HomePageModule } from './home.module';
import { ListaDeComprasPage } from '../lista-de-compras/lista-de-compras';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  DadosLogin = JSON['_body'];  
  items: any;
  lista: any;  
  listaDeCompras = [];
  listaCarrinho = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController) {
      this.inicializaLista()
      this.DadosLogin = this.navParams.get("DadosLogin")      
  }

  inicializaLista() {
    this.produtosProvider.getProdutos('/produtos').then(data => {
      this.lista = JSON.parse(data['_body']);
      if (this.lista[0]!= null) {
        this.initializeItems();
      }
    });
  }

  initializeItems() {
    this.items = this.lista;
  }

  itemClicked(produto) {
    let actionSheet = this.actionSheetCtrl.create({      
      buttons: [
        {
          text: 'Adicionar ao Carrinho',
          handler: () => {            
            this.addItemCarrinho(produto);                       
          }          
        },
        {
          text: 'Adicionar a Lista de Compras',          
          handler: () => {                        
            this.listaDeCompras.push(produto);
            console.log(this.listaDeCompras);
          }
        },
        {
          text: 'Cancel',          
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
 

  getItens(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goToCarrinho(){
    this.navCtrl.push(CarrinhoPage, {listaCarrinho: this.listaCarrinho});
  }

  goToPerfil(){
    this.navCtrl.push(PerfilDoUsuarioPage);
  }

  goToListaDeCompras(){    
    this.navCtrl.push(ListaDeComprasPage, {listaCompras: this.listaDeCompras});
  }

  addItemCarrinho(produto){
    const prompt = this.alertCtrl.create({      
      title: "Quantos produtos deseja?",
      inputs: [
        {
          name: 'Quantidade',
          placeholder: 'Quantidade'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            if(data.Quantidade > 0){              
              produto.quantidade = data.Quantidade; 
              var dadosUsuario = JSON.parse(this.DadosLogin);
              produto.usuarioId = dadosUsuario.dados.id;
              this.listaCarrinho.push(produto);
            }
          }
        }
      ]
    });
    prompt.present();
  }
  
}


