import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { ToastProvider } from '../toast/toast';
 

@Injectable()
export class WifiProvider {

  constructor(public network: Network,http: Http,public toast:ToastProvider) {
     network.onDisconnect().subscribe(() => {
  console.log('you are offline');
  this.toast.present();
});

network.onConnect().subscribe(()=> {
  console.log('you are online');
  this.toast.dis();
});
  }

  search() {
    this.network.onDisconnect().subscribe(() => {
      console.log('you are offline');
      this.toast.present();
    });
    
   this.network.onConnect().subscribe(()=> {
      console.log('you are online');
      this.toast.dis();
    });

  }

 
 
 
  

}
