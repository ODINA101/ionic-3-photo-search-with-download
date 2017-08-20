import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class DatabaseProvider {
links = [];
  constructor(public storage: Storage) {
  }

  getdata() {

    this.storage.get('links').then((data)=>{
      if(data !== null) {
   this.links = JSON.parse(data);
      }
    });

  }

  insertdata(data) {
    
    this.storage.get('links').then((res)=>{
      if(res !== null) {
       
        
          this.links = JSON.parse(res);
           
          console.log(this.links);
          this.links.push({
            link:data
          });
        
       this.storage.set('links',JSON.stringify(this.links));

      }else{
        this.links.push({
          link:data
        });
        this.storage.set('links',JSON.stringify(this.links));
      }
    });
  }



}
