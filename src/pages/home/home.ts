import { Component } from '@angular/core';
import { NavController ,ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth, private toast :ToastController) {

  }

  ionViewWillload(){
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid){
      this.toast.create({
        message: 'Welcome to APP_NAME,${data.email}',
        duration:3000
      }).present();
    }else{
      this.toast.create({
        message: 'Could mot find authencation details',
        duration:3000
      }).present();
    }
    });
    
  }
}
