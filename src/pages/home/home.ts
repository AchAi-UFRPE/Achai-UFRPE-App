import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  DadosLogin = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.DadosLogin = this.navParams.get("DadosLogin");
  console.log(this.DadosLogin);
  }

}
