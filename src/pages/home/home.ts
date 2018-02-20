import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from "../../serivces/user-service/user-service";
import { Observable } from "rxjs/Observable";
import { User } from "../../models/user";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireDatabaseModule } from "angularfire2/database";
import * as firebase from 'firebase/app';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

userId:string='';

 userDetails$: Observable<User[]>;
 usersList:object[]=[];
 users: Observable<any[]>;
  constructor(public navCtrl: NavController,
               private afAuth: AngularFireAuth,
                private toast : ToastController,
                  private userService : UserService,
                   public navParams : NavParams , public db:AngularFireDatabase ) {    

        //
        console.log(' currentUserId = '+afAuth.auth.currentUser.uid);
        var currentUserId = afAuth.auth.currentUser.uid;
    this.db.list('/users/'+currentUserId+'/contact').valueChanges().subscribe(data =>{
        this.usersList=data;
        console.log(this.usersList)
      })

    //  this.userDetails$=this.userService.getUserDetails().snapshotChanges().map(
    //    changes => {
    //      return changes.map(c => ({
    //        key:c.payload.key,...c.payload.val(),
    //      }))
    //    }
    //  )
    //  console.log(this.userDetails$)
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
