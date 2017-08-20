import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SocialSharing } from '@ionic-native/social-sharing';

/*
  Generated class for the ShareProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShareProvider {

  constructor(public http: Http,public socialSharing: SocialSharing) {


  }


  
  shareto(title,img) {
    // this code is to use the social sharing plugin
    // message, subject, file, url
    this.socialSharing.share("Check this item:",title,img)
    .then(() => {
      console.log('shared');
    })
    .catch((e) => {
      console.log(e)
    });
  }

}
