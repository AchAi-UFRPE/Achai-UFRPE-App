import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

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
  public qntProduto = {
    idProduto: null,
    qntProdutos: null,
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
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
    console.log(this.listaCarrinho)
    console.log(this.qntProduto)
  }


}
