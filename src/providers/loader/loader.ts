import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
 
@Injectable()
export class LoaderProvider {
  constructor(public http: Http,public loadingCtrl: LoadingController) {
    console.log('Hello LoaderProvider Provider');

  }
 loader:any;

  presentLoading() {
     
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
     
    });
    this.loader = loader;
     loader.present();
  }


  disLoading() {
     this.loader.dismiss();
    }
}

 
 
