import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpModule} from '@angular/http';
import { LoaderProvider } from '../providers/loader/loader';
import { TabsPage } from '../pages/tabs/tabs';
import { DownloadsPage } from '../pages/downloads/downloads';
import {IonicStorageModule} from '@ionic/storage';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DownloadsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    DownloadsPage
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaderProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
