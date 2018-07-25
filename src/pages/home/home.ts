import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/services/produtosService';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PerfilDoUsuarioPage } from '../perfil-do-usuario/perfil-do-usuario';
import { ActionSheetController } from 'ionic-angular'
import { HomePageModule } from './home.module';
import { ListaDeComprasPage } from '../lista-de-compras/lista-de-compras';
import { TelaInicialClientePage } from '../tela-inicial-cliente/tela-inicial-cliente';
import { CartaoPage } from '../cartao/cartao';


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
  nomeLista: any;

  public produtoLista = {
    id_produto: null,
    id_lista: null
  }

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
            var colors = [];  
            var login = JSON.parse(localStorage.getItem('dadosLocalLogin'))        
            var id = parseInt(login.dados.cliente.id);
            this.produtosProvider.getListas('/listaDeCompra/'+id).then(data => {
            this.nomeLista = JSON.parse(data['_body']); 
            for (let index = 0; index < this.nomeLista.length; index++) {
              colors.push(this.nomeLista[index]);
              console.log(colors);
            }
            }).then(s =>{ this.showRadio(colors,produto);
            });
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
  goToCartao(){
    this.navCtrl.push(CartaoPage);
  }

  goToCarrinho(){
    this.navCtrl.push(CarrinhoPage, {listaCarrinho: this.listaCarrinho});
  }

  goToPerfil(){
    this.navCtrl.push(TelaInicialClientePage);
  }

  goToListaDeCompras(){    
    this.navCtrl.push(ListaDeComprasPage, {listaCompras: this.listaDeCompras});
  }

  addItemCarrinho(produto){
                  
    this.listaCarrinho.push(produto);
  
  }

  showRadio(colors,produto) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione a Lista');    
    
    colors.forEach(color => {
        alert.addInput({
            type: 'radio',
            label: color.nome,
            value: color,
            checked: false
        });
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {                
        this.produtoLista.id_produto = produto.id;
        this.produtoLista.id_lista = data.id;        
        this.produtosProvider.postLista('/listaDeCompra/adicionar', this.produtoLista).then(data =>{
          console.log(data);
        });
      }
    });
    alert.present();
  }
        
  
}


