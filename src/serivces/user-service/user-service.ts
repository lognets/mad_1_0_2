import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {User} from '../../models/user';

@Injectable()
export class UserService {
    private userRef ={} ;
    result:string='';
    constructor(private db: AngularFireDatabase){

    }

    getUserDetails(){
        return this.db.list('users');
    }
    // addItem(user:User, userId:string){
    //     console.log('in service')
        
    //    return this.db.object<User>('users/'+userId+'/contact').update(user);
      
    // }
      addItem(user:User, userId:string){
        console.log('in service')
        
       return this.db.list<User>('users/'+userId+'/contact').push(user);
      
    }

    updateUID(user:User, userId:string){
        console.log('in service')
        
       return this.db.object<User>('users/'+userId).update({'userId':userId});
      
    }

    updateContactKey(userId:string,contactKey:string){
        console.log('in service')
        
       return this.db.object<User>('users/'+userId+'/contact').update({'contactId':contactKey});
      
    }
   

}