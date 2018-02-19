import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
//import { Component, OnInit, HostBinding } from '@angular/core';
//import { AngularFireDatabaseModule ,} from 'angularfire2/database';
//import {  FirebaseListObservable } from "angularfire2/database-deprecated";
//import { AngularFireDatabase } from "angularfire2/database";
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
//import { Router } from '@angular/router';

import {SignupPage} from '../signup/signup';
import {HomePage} from '../home/home';
//import { moveIn } from '../router.animations';

import {User} from '../../models/user';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  //styleUrls: ['./login.component.css'],
  //animations: [moveIn()],
  //host: {'[@moveIn]': ''}
})

export class LoginPage {
  items: Observable<any[]>;
  error: any;

  user ={} as User;
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,private toast :ToastController) { }

    async  signInWithFacebook() {
      try{
        const result=await this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider()) ;
      console.log(result)
      this.navCtrl.setRoot(HomePage);
  } catch(e){
    console.log(e);      
    this.toast.create({
      message: e.message,
      duration:5000
    }).present();      
  }
}

  signOut() {
    this.afAuth.auth.signOut();
  }
  async  signInWithGoogle(){
    try{
      const result=await this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(result)
      if(result && result.additionalUserInfo && result.additionalUserInfo.profile 
        && result.additionalUserInfo.profile.given_name){
          this.toast.create({
            message:" Hi,"+ result.additionalUserInfo.profile.given_name +"! welcome to APP_NAME." ,    
                   duration:5000
          }).present(); 
      this.navCtrl.setRoot(HomePage);
      }
  }catch(e){
    console.log(e);      
    this.toast.create({
      message: e.message,
      duration:5000
    }).present();      
  }
}
  async signInWithEmail(user :User){
    try{
    const result=await this.afAuth.auth
    .signInWithEmailAndPassword(user.email,user.password);
    console.log(result.uid);
    if(result && result.uid){
      this.navCtrl.setRoot(HomePage);
    }
    }catch(e){
      console.log(e);  
      user.email='';
      user.password=''; 
      this.toast.create({
        message: e.message,
        duration:5000
      }).present();      
    }
  }

  signUp(){
    this.navCtrl
    .push(
      SignupPage  
    )
  }
}
