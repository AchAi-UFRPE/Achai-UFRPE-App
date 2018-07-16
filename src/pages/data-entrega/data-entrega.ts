import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataEntregaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-entrega',
  templateUrl: 'data-entrega.html',
})
export class DataEntregaPage {

  myDate: any;
  myHrr: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataEntregaPage');
  }

  showDate(){
    console.log(this.myDate);
    console.log(this.myHrr);
  }

}
