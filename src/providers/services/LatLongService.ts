import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class LatLongProvider {

    urlServer: any = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    apiKey: any = '&key=AIzaSyAKvBrVWpJNNoiF-grtzosnNP7ZH5EAFfc';

    constructor(public http: Http) {
        console.log('Hello LatLongProvider Provider');
    }

    getCoordenates(addressString) {
        let urlApi = this.urlServer + addressString + this.apiKey;
        return new Promise((resolve, reject) => {

            this.http.get(urlApi).subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    stringAddress(addressObject: any) {
        let addressString = addressObject.numero + '+' + addressObject.rua + '+' + addressObject.bairro;
        return addressString;
    }

}