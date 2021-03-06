import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/services/produtosService';

/**
 * Generated class for the MinhasEntregasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minhas-entregas',
  templateUrl: 'minhas-entregas.html',
})
export class MinhasEntregasPage {

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
    console.log('ionViewDidLoad MinhasEntregasPage');
  }

  inicializaLista() {
    var login = JSON.parse(localStorage.getItem('dadosLocalLogin'))    
    console.log(login.dados.id);
    var id = parseInt(login.dados.id);
    this.produtosProvider.getListas('/listaDeCompra/'+id).then(data => {
      this.minhaLista = JSON.parse(data['_body']);
      console.log(this.minhaLista);
    });
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
    public voltar():void{
      this.navCtrl.pop();
    }

}
