import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
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
  firstName :string ="";
  lastName :string ="";
  password :string ="";
  email :string ="";
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth, public db:AngularFireDatabase, public navParams: NavParams) {

      this.firstName=this.navParams.get('firstName');
      this.lastName=this.navParams.get('lastName');
      this.password=this.navParams.get('password');
      this.email=this.navParams.get('email');
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

  
  registerWithEmail(){ 
   // console.log(this.firstName); console.log(this.lastName);

      this.db.list('/user/contact').push({
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password
      }).then(res => {
        console.log(res);
        this.navCtrl .push(  HomePage      )
      }
    
    )  
       
  }
  goBack(){
    this.navCtrl.pop();
  }
}
