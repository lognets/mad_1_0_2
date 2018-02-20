import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import {OverviewPage } from '../pages/overview/overview';
import { CalenderPage } from '../pages/calender/calender';
import { AddAutoDebitPage } from '../pages/add-auto-debit/add-auto-debit';
import { GroupPage } from '../pages/group/group';
import { HomePage } from '../pages/home/home';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { BasicPage } from '../pages/sliders/pages';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =     BasicPage;
  tab1Root: any = CalenderPage;
  tab2Root: any = AddAutoDebitPage;
  tab3Root: any = OverviewPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

