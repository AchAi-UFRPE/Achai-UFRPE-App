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

  UrlServer:any = 'http://localhost:3000';

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  postLogin(UrlApi, data) {
    UrlApi= this.UrlServer+UrlApi;
    return new Promise((resolve, reject) => {

      this.http.post(UrlApi, data,this.createRequestOptions()).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  private createRequestOptions() {
    let headers = new Headers();
    headers.append("Authorization", 'JWT '+localStorage.getItem("token"));
    headers.append("Content-Type", "application/json");
    return new RequestOptions({ headers: headers });
  }

}
