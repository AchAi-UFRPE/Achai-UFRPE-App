import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipocadastroPage } from '../tipocadastro/tipocadastro';
import { Http } from '@angular/http';
import { LoginProvider } from '../../providers/services/loginService';
import { HomePage } from '../home/home';
import { AlertController} from 'ionic-angular';
import { LoadingController} from 'ionic-angular';
import { TelaInicialClientePage } from '../tela-inicial-cliente/tela-inicial-cliente';
import { HomeEntregadorPage } from '../home-entregador/home-entregador';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginDados = {
    email: null,
    senha: null
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http,
    public LoginProvider: LoginProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  cadastro():void {
    this.navCtrl.push(TipocadastroPage);
  }

  entrar():void{
    //this.navCtrl.push(HomeEntregadorPage); //Gambis detected!
    this.LoginProvider.postLogin('/login', this.loginDados)
    .then(dadosLogin => {
      
      console.log(dadosLogin); // data received by server 
      if (dadosLogin['_status'] != 'erro'){        
        this.navCtrl.push(HomePage,{DadosLogin: dadosLogin['_body']});
        let data = dadosLogin['_body'];
        localStorage.setItem('dadosLocalLogin', data);
      }else{        
        this.showAlertFailedLogin();
      }
    }, (err) => {
        console.log("Erro", err);
    });
  }

  showAlertFailedLogin() {
    const alert = this.alertCtrl.create({
      subTitle: 'Login ou Senha incorreto',
      buttons: ['OK']
    });
    alert.present();
  }

}
