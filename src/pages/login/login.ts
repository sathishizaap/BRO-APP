import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../providers/commonService';
import { GlobalVars } from '../../providers/globalVars';
import { regexPatterns } from '../../validators/regexPatterns';
import { LoadingController,AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private _loginForm: FormGroup;
  private _passwordInputType: string = "password";
  private _passwordIcon : string = "eye-off";

  constructor(
  	private _formBuilder: FormBuilder,
    public loader:LoadingController,
    public commonService:CommonService,
    public navCtrl: NavController,
    public globalvars:GlobalVars,
    public alertCtrl:AlertController) {
  	this._loginForm = this._formBuilder.group({

  		//Email
  		email:["admin@gmail.com",
  		Validators.compose([
  			Validators.required,Validators.pattern(regexPatterns.email)

  			])
  		],
  		//Password
  		password:["password",
  		Validators.compose([
  			Validators.required,
           Validators.minLength(6)
  			])
  		],
  	});
  }
   _toggleViewPassword(event: MouseEvent) {
    event.preventDefault();
    console.info("show password");
    if (this._passwordInputType === "password") {
      this._passwordInputType = "text";
      this._passwordIcon = "eye";
    } else {
      this._passwordIcon = "eye-off";
      this._passwordInputType = "password";
    };
  };

   _login(){
  	if(this._loginForm.valid)
    {
      let loading = this.loader.create({
        content: 'loading.....'
      });
      loading.present();
      this.commonService.login(this._loginForm.value).then((result) => {
       
        loading.dismiss();
        if(result.status=="success"){
          this.globalvars.setUserdata(JSON.stringify(result.data));
          this.navCtrl.setRoot(ProfilePage); 
        }
        else{
          let alert = this.alertCtrl.create({
            title: 'Error',
            message: result.msg,
            buttons: ['OK'],
          });
          alert.present();
          return false;
        }
      },(err) => {
        console.log(err);
        let alert =  this.alertCtrl.create({
          title :'Error',
          message:'Something Wrong',
          buttons: ['OK'],
        });
        alert.present();
        return false;
    });
   }
  }
  



}
