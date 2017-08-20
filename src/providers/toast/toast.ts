import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
@Injectable()
export class ToastProvider {

  constructor(public http: Http,public toastCtrl:ToastController) {
    console.log('Hello ToastProvider Provider');
  }

  toast = this.toastCtrl.create({
    message: 'waiting for wifi...',
  });

  present() {
    this.toast.present();
  }
 dis() {
    this.toast.dismiss();
  }
}
