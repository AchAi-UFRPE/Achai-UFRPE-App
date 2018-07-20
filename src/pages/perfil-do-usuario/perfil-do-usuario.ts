import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroClienteProvider } from '../../providers/services/cadastroClienteService';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the PerfilDoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-do-usuario',
  templateUrl: 'perfil-do-usuario.html',
})
export class PerfilDoUsuarioPage {

  userData = [];
  edtUsuario = {
    nome: null,
    email: null,
    senha: null, 
    endereco: null,   
  }
  edtEnd = {
    rua: null,
    numero: null,
    complemento: null,
    bairro: null,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public cadastroClienteProvider: CadastroClienteProvider) {
    this.userData.push(JSON.parse(localStorage.getItem('dadosLocalLogin')));
    console.log(this.userData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilDoUsuarioPage');
  }

  editarUsuario(){
    var idUser = this.userData[0].dados.id;       
    this.verificaDados(this.edtUsuario);     
    this.verificaDados(this.edtEnd);
    if (!this.isEmpty(this.edtEnd)){
      this.edtUsuario.endereco = this.edtEnd;  
    } 
    console.log(this.edtUsuario);
    this.cadastroClienteProvider.putEditarCliente('/usuarios/'+idUser, this.edtUsuario).then(novousuario => {
      console.log(novousuario)
    }, (err) => {
        console.log(err);
    });
    this.navCtrl.push(HomePage);
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  verificaDados(obj){
    var item;
    for (item in obj){
      if (obj[''+item] == null){
        delete obj[''+item]
      }
    }
  }
  public voltar():void{
    this.navCtrl.pop();
  }
}
