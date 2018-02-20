import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {  FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase } from "angularfire2/database";
//import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
//import { Router } from '@angular/router';
//import {HomePage} from '../tasks/tasks';
import { HomePage } from '../home/home';
//import { moveIn } from '../router.animations';

import {User} from '../../models/user';
import { UserService } from "../../serivces/user-service/user-service";
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  //styleUrls: ['./login.component.css'],
  //animations: [moveIn()],
  //host: {'[@moveIn]': ''}
})

export class SignupPage {
  items: Observable<any[]>;
  error: any;
  user ={} as User;
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth, 
    public db:AngularFireDatabase,private toast :ToastController,
    private userService:UserService,public navParams: NavParams) {

     
     }

  
  signOut() {
    this.afAuth.auth.signOut();
  }
 
  signInWithEmail(){
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.EmailAuthProvider())
    .then(res => console.log(res)).catch(
      (err)=>{
        this.error=err;
      });
  }

  
 async registerWithEmail(user:User){ 
   try{
   // console.log(this.firstName); console.log(this.lastName);
   const result = await this.afAuth.auth.
                  createUserWithEmailAndPassword(user.email,user.password);
     console.log(result);
     if(result && result.uid){     
        this.insertUserDetails(user,result.uid);
        this.userService.updateUID(user,result.uid);
    }
   }catch(e){
     console.error(e);
     user.email='';
      user.password=''; 
     this.toast.create({
      message: e.message,
      duration:5000
    }).present();   
   }
       
  }
  goBack(){
    this.navCtrl.pop();
  }
 async insertUserDetails(user,uid){
 try{

    const contact = await this.userService.addItem(user,uid);
    
    if(contact && contact.key){
      console.log(contact.key);
      this.userService.updateContactKey(uid,contact.key);
   
    }
    
    this.navCtrl.setRoot(HomePage);
   

    
   
      }catch(err){
         console.error(err);
        user.email='';
      user.password=''; 
        this.toast.create({
      message: err.message,
      duration:5000
    }).present();   
      }
  }
}
