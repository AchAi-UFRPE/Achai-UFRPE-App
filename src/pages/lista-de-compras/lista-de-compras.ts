import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

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
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
    this.listaCompras = this.navParams.get("listaCompras");
    console.log(this.listaCompras);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeComprasPage');
  }

  itemClicked(produto){
    
      let actionSheet = this.actionSheetCtrl.create({      
        buttons: [
          {
            text: 'Retirar da Lista',          
            handler: () => {
              var index = this.listaCompras.indexOf(produto);
              if (index > -1){
                this.listaCompras.splice(index,1);
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

}