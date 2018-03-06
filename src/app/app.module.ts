import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { PayPal  } from '@ionic-native/paypal';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ChapterPage } from '../pages/chapter/chapter';
import { CouncilPage } from '../pages/council/council';
import { PaypalPage } from '../pages/paypal/paypal';
import { CommanderyPage } from '../pages/commandery/commandery';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonService } from '../providers/commonService';
import {GlobalVars} from "../providers/globalVars";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProfilePage,
    ChapterPage,
    CouncilPage,
    CommanderyPage,
    PaypalPage
    
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProfilePage,
    ChapterPage,
    CouncilPage,
    CommanderyPage,
    PaypalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    GlobalVars,
    PayPal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
