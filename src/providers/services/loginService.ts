import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  UrlServer:any = 'https://achai.herokuapp.com';

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  postLogin(UrlApi, data) {
    UrlApi= this.UrlServer+UrlApi;
    return new Promise((resolve, reject) => {

      this.http.post(UrlApi, data).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
