import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroEntregadorProvider } from '../../providers/services/cadastroEntregadorService';

@IonicPage()
@Component({
  selector: 'page-cadastro-entregador',
  templateUrl: 'cadastro-entregador.html',
})
export class CadastroEntregadorPage {

  //codigo para fazer a máscara de cpf, cnpj
  cpf_cnpj = '';
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  pureResult: any;
  maskedId: any;
  val: any;
  v: any;

  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    if(parts[0].length <= 11){
      this.maskedId = this.cpf_mask(parts[0]);
      return this.maskedId;
    }else{
      //deve retornar um erro sobre a quantidade de digitos inseridos
    }
};

unFormat(val) {
    if (!val) {
        return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
};

 cpf_mask(v) {
    v = v.replace(/\D/g, ''); //Remove all that is not digits
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit again
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Insert an dash between the third and quarter digit
    return v;
}
//fim do código para colocar máscara em cpf e cnpj

  public dadosCadastroEntregador = {
    nome: null,
    email: null,
    senha: null,
    cpf: null,
    cnh: null
  }

  private REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public CadastroEntregadorProvider: CadastroEntregadorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEntregadorPage');
  }
  private confirmacaoNome(nome_entregador):any{
    if (nome_entregador != null){
      if (nome_entregador.toString().length >= 3){
        return true;
      }else{
        this.nomeInvalido();
        }
    }else{
      this.nomeInvalido();
      }
  }


  private confirmacaoSenha(senha_entregador):any{
    if (senha_entregador != null){
      if (senha_entregador.toString().length >= 5){
        return true;
      }else{
        this.senhaInvalida();
        }
    }else{
      this.senhaInvalida();
    }
  }
  
  private confirmacaoEmail(email_entregador):any{
    if (this.REGEX.test(email_entregador)){
      return true;
    }else{
      this.emailInvalido();
    }
  }

  private confirmacaoCpf(cpf_entregador):any{
    if (cpf_entregador != null){
      if (cpf_entregador.toString().length == 14){
        return true;
      }else{
        this.cpfInvalido();
        }
    }else{
      this.cpfInvalido();
    }
  }
  private confirmacaoCnh(cnh_entregador):any{
    if (cnh_entregador != null){
      if (cnh_entregador.toString().length == 11){
        return true;
      }else{
        this.cnhInvalida();
        }
    }else{
      this.cnhInvalida();
    }
  }
  irLogin():void{
    
    let nome_entregador = this.dadosCadastroEntregador.nome;
    let email_entregador = this.dadosCadastroEntregador.email;
    let senha_entregador = this.dadosCadastroEntregador.senha;
    let cpf_entregador = this.dadosCadastroEntregador.cpf;
    let cnh_entregador = this.dadosCadastroEntregador.cnh;

    if (this.confirmacaoNome(nome_entregador)){
      if(this.confirmacaoEmail(email_entregador)){
        if(this.confirmacaoSenha(senha_entregador)){
          if(this.confirmacaoEmail(email_entregador)){
            if(this.confirmacaoCpf(cpf_entregador)){
              if(this.confirmacaoCnh(cnh_entregador)){
                this.CadastroEntregadorProvider.postCadastroEntregador('/entregadores', this.dadosCadastroEntregador)
    .then(dadosCadastro => {  
      
      //console.log(dadosLogin); // data received by server 
      if (dadosCadastro['_body'] != "[]"){        
        this.navCtrl.push(LoginPage);
      }else{        
        this.showAlertFailedCadastro();
      }
    }, (err) => {
        console.log("Erro", err);
    });
              }
            }
          }
        }
      }
    }
  }

  showAlertFailedCadastro() {
    const alert = this.alertCtrl.create({
      title: 'Usuário',
      subTitle: 'Cadastro não pode ser efetuado',
      buttons: ['OK']
    });
    alert.present();
  }
  public voltar():void{
    this.navCtrl.pop();
  }
  public nomeInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'Nome muito curto',
      buttons: ['OK']
    });
    alert.present();
  }
  public emailInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'Email inválido',
      buttons: ['OK']
    });
    alert.present();
  }
  public senhaInvalida() {
    const alert = this.alertCtrl.create({
      subTitle: 'Senha com menos de 5 caracteres',
      buttons: ['OK']
    });
    alert.present();
  }
  public cpfInvalido() {
    const alert = this.alertCtrl.create({
      subTitle: 'CPF inválido',
      buttons: ['OK']
    });
    alert.present();
  }
  public cnhInvalida(){
    const alert = this.alertCtrl.create({
      subTitle: 'CNH deve conter 11 dígitos',
      buttons: ['OK']
    });
    alert.present();
  }

}
