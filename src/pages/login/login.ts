import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipocadastroPage } from '../tipocadastro/tipocadastro';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators/map';
import { LoginProvider } from '../../providers/login/loginService';
import { stringify } from '@angular/compiler/src/util';
import { HomePage } from '../home/home';



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
    public LoginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  cadastro():void {
    this.navCtrl.push(TipocadastroPage);
  }

  entrar():void{

    this.LoginProvider.postLogin('/user', {"email":""+this.loginDados.email,"senha":""+this.loginDados.senha})
    .then(data => {
      
      console.log(data); // data received by server 
      if (data['_body'] != "[]"){
        this.navCtrl.push(HomePage,{email: this.loginDados.email});
      }else{
        console.log("Usuário n tem permissão")
      }
    }, (err) => {
        console.log("Erro", err);
    });
  }
}
