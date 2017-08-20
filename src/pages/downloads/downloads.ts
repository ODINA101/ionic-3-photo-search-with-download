import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
})
export class DownloadsPage {
  lists = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public database:DatabaseProvider) {
    this.database.getdata();
  this.lists = database.links.reverse();
  
  }
  

 




}
