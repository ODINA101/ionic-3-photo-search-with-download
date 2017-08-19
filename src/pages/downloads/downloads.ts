import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the DownloadsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
})
export class DownloadsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  
  this.storage.get('links').then((val) => {
  console.log(val);
  });
  }

 d_imgs = [];  




}
