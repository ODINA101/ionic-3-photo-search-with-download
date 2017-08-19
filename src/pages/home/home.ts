import { Component } from '@angular/core';
import { NavController,Platform, AlertController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {File} from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { LoaderProvider } from '../../providers/loader/loader';
import { DatabaseProvider } from '../../providers/database/database';
declare var cordova: any;



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[FileTransfer,File]
})
export class HomePage {
  searchbar = "";
  imgs = [];
  storageDirectory: string = '';
  welcome = "search images good luck!";
  constructor(public navCtrl: NavController,
    private storage: Storage,
              public http:Http,
              public loader:LoaderProvider,public platform: Platform,
               public transfer: FileTransfer, 
                public alertCtrl: AlertController,public file:File,public database:DatabaseProvider) {

                  this.platform.ready().then(() => {
                    // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
                    if(!this.platform.is('cordova')) {
                      return false;
                    }
              
                    if (this.platform.is('ios')) {
                      this.storageDirectory = cordova.file.documentsDirectory;
                    }
                    else if(this.platform.is('android')) {
                      this.storageDirectory = cordova.file.externalDataDirectory;
                  console.log(this.storageDirectory);
                    }
                    else {
                      // exit otherwise, but you could add further types here e.g. Windows
                      return false;
                    }
                  });
  }

  



  getItems(val) {
    this.welcome = "";
    this.loader.presentLoading();
this.http.get('https://pixabay.com/api/?key=6211753-0724a2e2b63705c4a7d06dadb&q='+ val +'&image_type=photo&pretty=true')
.map(res => res.json())
.subscribe(res => {
  this.imgs = res.hits;
  this.loader.disLoading();
});
   console.log(val);
   this.searchbar = "";
   
  }

links = [];




  downloadImage(image) {
    
    
        this.platform.ready().then(() => {
    
          const fileTransfer: FileTransferObject = this.transfer.create();
    
          const imageLocation = image;
          const imagename = image.substring(24,image.lentgh);
          fileTransfer.download(imageLocation, this.file.externalRootDirectory+'Pictures/imagesearcher/' + imagename).then((entry) => {
    console.log(entry);
            const alertSuccess = this.alertCtrl.create({
              title: `Download Succeeded!`,
              subTitle: `${image} was successfully downloaded`,
              buttons: ['Ok']
            });
    
            alertSuccess.present();
    
          }, (error) => {
    
            const alertFailure = this.alertCtrl.create({
              title: `Download Failed!`,
              subTitle: `please connect to wifi`,
              buttons: ['Ok']
            });
    
            alertFailure.present();
    
          });
    
        });
    
      }
    


}
