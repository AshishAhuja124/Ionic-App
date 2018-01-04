import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;
  
  constructor(private alertCtrl:AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  alert(message:string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
registerUser(){
  this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
  .then(data=>{
    console.log('got data',data);
    this.alert('Registered!');
  })
  .catch(error=>{
    console.log('got error',error);
    this.alert(error.message); 
 });
  console.log('register with',this.user.value,this.password.value);
}
}
