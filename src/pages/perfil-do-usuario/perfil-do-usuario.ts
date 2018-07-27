import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroClienteProvider } from '../../providers/services/cadastroClienteService';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { LatLongProvider } from '../../providers/services/LatLongService';

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
    bairro: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public cadastroClienteProvider: CadastroClienteProvider,
    public latLongProvider: LatLongProvider) {
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
      let addressString = this.latLongProvider.stringAddress(this.edtEnd);
      this.latLongProvider.getCoordenates(addressString)
        .then((res:any) => {
          let data = JSON.parse(res._body);
          data = data.results[0].geometry.location;

          let latitude = String(data.lat);
          let longitude = String(data.lng);

          this.edtEnd["latitude"] = latitude;
          this.edtEnd["longitude"] = longitude;
          this.edtUsuario.endereco = this.edtEnd;

          this.cadastroClienteProvider.putEditarCliente('/usuarios/' + idUser, this.edtUsuario).then(novousuario => {
            console.log(novousuario)
          }, (err) => {
            console.log(err);
          });

        });
    }
    
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
