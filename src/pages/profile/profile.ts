import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,MenuController} from 'ionic-angular';
//import { LoadingController,AlertController } from 'ionic-angular';
import { CommonService } from '../../providers/commonService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { GlobalVars } from '../../providers/globalVars';
import { regexPatterns } from '../../validators/regexPatterns';
//import { ChapterPage } from '../chapter/chapter';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

 private _profileForm: FormGroup;
 
	private _passwordInputType: string = "password";
  private _passwordIcon : string = "eye-off";
	public profile;
  public info;
  public personal;
  public home_address;
  public work_address;
  public affiliations;
  public family;
  public editdata;
  constructor(
  private _formBuilder: FormBuilder,
  public navCtrl: NavController,
	public commonService: CommonService,
  private alertCtrl: AlertController,
  public loader:LoadingController,
  private menu: MenuController,
	public globalvars:GlobalVars,
  public  navParams: NavParams
  	) {

  	this.profile = this.globalvars.getUserdata();
     this.commonService.profile(this.profile).then((result) => {

       this.editdata = result.data;
       console.log(this.editdata);
       if(this.editdata !=''){
         this.info = this.editdata;
       }
       
     },(err) => {
        // console.log(err);
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'Something Wrong',
          buttons: ['Ok'],
        });
        alert.present();
        return false;
      });
      
    
     setTimeout(()=>{
       this.onFormLoad(this.info);
     },3000);
     

  	this._profileForm = this._formBuilder.group({
          id:[""],
            //FIRTSNAME
          first_name: ["",
            Validators.compose([
              Validators.required
            ])
          ],
           password :[""],
           middle_name:[""],
           //LASTNAME
          last_name: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          //Email
          email: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          //Home Phone
           phone: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          //status
           status: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          
          //IS ADMIN
           is_admin: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          //MAESON
          mason: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          //ADDRESS1
           address1: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          //City
          city: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          //State
          state: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          //Zip
          zip: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          //Bob
          dob: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          b_city: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          //Zip
          b_state: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          
           mobile:[""],
           //password:[""],
           home_blue_lodge:[""],
           address2:[""],
           york_rite:[""],
           scottish_rite:[""],
           shriner:[""],
           grotto:[""],
           spouse:[""],
           kids1:[""],
           kids2:[""],
           kids3:[""],
           kids4:[""],
           work:[""],
           off_email:[""],
           notes:[""],
           w_address1:[""],
           w_address2:[""],
           w_city:[""],
           w_state:[""],
           w_zip:[""],
        });
    this.menu = menu;
    this.menu.enable(true, 'myMenu');
  }

onFormLoad(form)
{

   let loading = this.loader.create({
        content: 'Loading...'
      });
 loading.present();

  this._profileForm = this._formBuilder.group({
           id:[form.info.id],
            first_name: [form.info.first_name,
            Validators.compose([
              Validators.required
            ])
            ],
           last_name: [form.info.last_name,
            Validators.compose([
              Validators.required
            ])
            ],
           middle_name:[form.info.middle_name],

           password:[""],

           email: [form.info.email,
            Validators.compose([
              Validators.required
            ])
            ],

            phone: [form.info.phone,
            Validators.compose([
              Validators.required
            ])
            ],

            status: [form.info.status,
            Validators.compose([
              Validators.required
            ])
            ],

            is_admin: [form.info.is_admin,
            Validators.compose([
              Validators.required
            ])
            ],

            mason: [form.personal.mason,
            Validators.compose([
              Validators.required
            ])
            ],
           
           address1: [form.home_address.address1,
            Validators.compose([
              Validators.required
            ])
            ],

            address2: [form.home_address.address2,
            Validators.compose([
              Validators.required
            ])
            ],

            city: [form.home_address.city,
            Validators.compose([
              Validators.required
            ])
            ],

            state: [form.home_address.state,
            Validators.compose([
              Validators.required
            ])
            ],

            zip: [form.home_address.zip,
            Validators.compose([
              Validators.required
            ])
            ],

             dob: [form.personal.dob,
            Validators.compose([
              Validators.required
            ])
            ],

            b_city: [form.personal.b_city,
            Validators.compose([
              Validators.required
            ])
            ],

            b_state: [form.personal.b_state,
            Validators.compose([
              Validators.required
            ])
            ],

           home_blue_lodge:[form.info.home_blue_lodge],
           york_rite:[form.affiliations.york_rite],
           scottish_rite:[form.affiliations.scottish_rite],
           shriner:[form.affiliations.shriner],
           grotto:[form.affiliations.grotto],
           spouse:[form.family.spouse],
           kids1:[form.family.kids1],
           kids2:[form.family.kids2],
           kids3:[form.family.kids3],
           kids4:[form.family.kids4],
           work:[form.personal.work],
           off_email:[form.personal.off_email],
           mobile:[form.personal.mobile],
           notes:[form.personal.notes],
           w_address1:[form.work_address.w_address1],
           w_address2:[form.work_address.w_address2],
           w_city:[form.work_address.w_city],
           w_state:[form.work_address.w_state],
           w_zip:[form.work_address.w_zip]
        });
  loading.dismiss();

}

private _toggleViewPassword(event: MouseEvent) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  _submitProfile(){
     let loading = this.loader.create({
        content: 'Loading...'
      });
     if(this._profileForm.valid)
     {
      loading.present();
       this.commonService.profileData(this._profileForm.value).then((result) => {
         loading.dismiss();
           let alert = this.alertCtrl.create({
          title: result.status.toUpperCase(),
          message: result.msg,
          buttons: [{
              text:'Ok',
              handler:()=>{
                //this.navCtrl.push(ChapterPage);
                this.navCtrl.setRoot(ProfilePage);
              }
            }],
          });
          alert.present();
      },(err) => {
        console.log(err);
        loading.dismiss();
        console.log(err);
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'Something Wrong',
          buttons: ['Ok'],
        });
        alert.present();
        return false;
        });
     }
   }


}
