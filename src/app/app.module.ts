
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {LoginPage} from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CalenderPage } from '../pages/calender/calender';
import { AddAutoDebitPage } from '../pages/add-auto-debit/add-auto-debit';
import { OverviewPage } from '../pages/overview/overview';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { GroupPage } from '../pages/group/group';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { UserService } from "../serivces/user-service/user-service";
import { BasicPage } from '../pages/sliders/pages';

export const  firebaseConfig = {
  apiKey: "AIzaSyAIeYGIUemE5NEMeZM8hVPJ1gJCE0VhtO4",
  authDomain: "mychat-11861.firebaseapp.com",
  databaseURL: "https://mychat-11861.firebaseio.com",
  projectId: "mychat-11861",
  storageBucket: "mychat-11861.appspot.com",
  messagingSenderId: "599892824836"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    AboutPage,
    TabsPage,
    ContactPage,CalenderPage,
    AddAutoDebitPage,
    OverviewPage,
    TabsControllerPage,
    GroupPage,
    ProfilePage,
    SettingsPage,
    LoginPage,
    BasicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    AboutPage,
    ContactPage,CalenderPage,
    AddAutoDebitPage,
    OverviewPage,
    TabsControllerPage,
    GroupPage,
    ProfilePage,
    SettingsPage,
    TabsPage,
    ContactPage,
    LoginPage,
    BasicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
