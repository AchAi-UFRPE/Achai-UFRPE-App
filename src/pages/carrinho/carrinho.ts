import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { ProdutosProvider } from '../../providers/services/produtosService';

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  listaCarrinho = [];
  public carrinhoJson = {
    dados: null,
    nome: null,
    id_Usuario: null 
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public produtosProvider: ProdutosProvider) {
    this.listaCarrinho = this.navParams.get("listaCarrinho");
    console.log(this.listaCarrinho);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

  itemClicked(produto){
    
    let actionSheet = this.actionSheetCtrl.create({      
      buttons: [
        {
          text: 'Retirar do Carrinho',          
          handler: () => {
            var index = this.listaCarrinho.indexOf(produto);
            if (index > -1){
              this.listaCarrinho.splice(index,1);
            }              
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

  show(){
    const confirm = this.alertCtrl.create({
      title: 'Deseja salvar uma lista de compras?',      
      buttons: [
        {
          text: 'Não',
          handler: data => {
            data = {};
            data.lista = this.listaCarrinho;
            data.id_usuario = 1;
            console.log(data);
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.show2();
          }
        }
      ]
    });
    confirm.present();
  }

  show2(){
    const prompt = this.alertCtrl.create({      
      title: "Digite o nome da lista",
      inputs: [
        {
          name: 'nomeLista',
          placeholder: 'Nome'
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
            var login = JSON.parse(localStorage.getItem('dadosLocalLogin'));    
            data.lista = this.listaCarrinho;
            var id = parseInt(login.dados.cliente.id);            
            data.id_usuario = id;
            console.log(data);
            this.produtosProvider.postLista("/listaDeCompra", data)
            }
          }
        
      ]
    });
    prompt.present();
  } 
  
  
}



