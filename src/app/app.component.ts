import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
//import { HomePage } from '../pages/home/home';
import { ChapterPage } from '../pages/chapter/chapter';
import { CouncilPage } from '../pages/council/council';
import { PaypalPage } from '../pages/paypal/paypal';
import { CommanderyPage } from '../pages/commandery/commandery';
import { GlobalVars } from '../providers/globalVars';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) navCtrl: Nav;
 
 private user:any;
  showLevel1 = null;
  showLevel2 = null;
  rootPage: any = LoginPage;
 
  pages: Array<{
    title: string, 
    component: any,
    icon:any,visible:any,
    dropdown:any,
    multilevel:Array<{title:string,component:any,icon:string}>
  }>;
 

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public globalvars: GlobalVars,public menuCtrl:MenuController) {
    this.initializeApp();
    this.user = this.globalvars.getUserdata();

     // used for an example of ngFor and navigation
      this.pages = 
      [
        {
          title:'Profile',component:ProfilePage,icon:'ios-contact',visible:true,dropdown:false,multilevel:[]
        },
        {
          title:'York Rite',component:'',icon:'ios-boat',visible:true,dropdown:true,
          multilevel:
          [
            { title: 'Chapter', component: ChapterPage,icon:''},
            { title: 'Council', component: CouncilPage,icon:'' },
            { title: 'Commandery', component: CommanderyPage,icon:''}
          ]
        },
         { title: 'Paypal', component: PaypalPage,icon:'ios-basket',visible:false,dropdown:false, multilevel:[]},
        { title: 'Logout', component: LoginPage,icon:'ios-power',visible:false,dropdown:false, multilevel:[]}
      ];

     }
  toggleLevel1(idx,dp,p)
  {
    if(dp==true)
    {
      if (this.isLevel1Shown(idx))
      {
        this.showLevel1 = null;
      }
      else
      {
        this.showLevel1 = idx;
      }
    }
    else
    {
      this.menuCtrl.close();
      this.openPage(p);
    }
  };
  toggleLevel2(idx) {
  if (this.isLevel2Shown(idx)) {
    this.showLevel1 = null;
    this.showLevel2 = null;
  } else {
    this.showLevel1 = idx;
    this.showLevel2 = idx;
  }
  };
  isLevel1Shown(idx) {
  return this.showLevel1 === idx;
}
shs(p)
{
  this.menuCtrl.close();
  this.openPage(p);
}
isLevel2Shown(idx) {
  return this.showLevel1 === idx;
}

initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }
  _logout(page) {
    this.globalvars.deleteUserdata();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(LoginPage);
  }
}
