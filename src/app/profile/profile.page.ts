import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Item {}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private itemDoc: AngularFirestoreCollection<Item>;
  item: Observable<Item>;
  
  constructor(public Afauth : AngularFireAuth, public router: Router, private afs: AngularFirestore) {
    this.itemDoc = this.afs.collection("patients"); 
    this.item = this.itemDoc.valueChanges();
    console.log(this.item);
   }

    

  logout () {
    this.Afauth.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
   });
  }

  

  ngOnInit() {
  }

}
