import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {}

  constructor(public Afauth : AngularFireAuth, public toastController: ToastController, public router: Router ) {
    if(this.Afauth.authState) {
      this.presentonline();
    }
    else {
      this.presentFail();
    }
  }

  logForm (this: any) {
    this.Afauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(res => this.success())
    .catch(error => this.presentFail());
  }

  success() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  async presentFail() {
    const toast = await this.toastController.create({
      message: 'Error Logging in.',
      duration: 2000
    });
    toast.present();
  }

  async presentonline() {
    const toast = await this.toastController.create({
      message: 'Online',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
