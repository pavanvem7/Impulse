import { Component, OnInit } from '@angular/core';

import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private FBAuth : FirebaseAuthentication ) { 
    this.FBAuth.signInWithEmailAndPassword('pavanvemula7@gmail.com', 'pavan1425')
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

  }

  ngOnInit() {
  }

}
