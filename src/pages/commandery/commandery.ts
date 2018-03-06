import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,MenuController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../providers/commonService';
import { regexPatterns } from '../../validators/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the CommanderyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-commandery',
  templateUrl: 'commandery.html',
})
export class CommanderyPage {

	private _commanderyForm: FormGroup;
	public user_id;
	public commandery;
	public editdata;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private _formBuilder: FormBuilder,
  	public globalvars:GlobalVars,
  	public commonService: CommonService,
  	public loader:LoadingController,
    private menu: MenuController,
  	private alertCtrl: AlertController) {

  	this.user_id = this.globalvars.getUserdata();

  	this.commonService.commandery(this.user_id).then((result) => {
     	
       this.editdata = result.data;
      
       if(this.editdata !=''){
         this.commandery = this.editdata;
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
      this.onFormLoad(this.commandery);
     },3000);

     this._commanderyForm = this._formBuilder.group({
  		id:[""],
  		user_id:[""],
  		//council_name
          comm_name: ["",
            Validators.compose([
              Validators.required
            ])
          ],
           
           //district_no
          district_no: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          //council_no
          comm_no: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          //top_line_signer
           top_line_signer: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          //second_line_signer
           second_line_signer: ["",
            Validators.compose([
              Validators.required
            ])
          ],

          //date_joined
           date_joined: ["",
            Validators.compose([
              Validators.required
            ])
          ],
          master_emi_cmdr:[""],
          generalsmo:[""],
          prebate:[""],
          year1:[""],
          capt_general:[""],
          sword_bearer:[""],
          district_emi_cmdr:[""],
          recorder:[""],
          stand_bearer:[""],
          year2:[""],
          treasurer:[""],
          warden:[""],
          emi_cmdr:[""],
          sr_warden:[""],
          sentinel:[""],
          year3:[""],
          jr_warden:[""]
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

 this.user_id = this.globalvars.getUserdata();

	this._commanderyForm = this._formBuilder.group({
		 id:[form.id],
		 user_id :[this.user_id.id],
     
		 comm_name: [form.comm_name,
            Validators.compose([
              Validators.required
            ])
            ],

            comm_no: [form.comm_no,
            Validators.compose([
              Validators.required
            ])
            ],

            district_no: [form.district_no,
            Validators.compose([
              Validators.required
            ])
            ],

            top_line_signer: [form.top_line_signer,
            Validators.compose([
              Validators.required
            ])
            ],

            second_line_signer: [form.second_line_signer,
            Validators.compose([
              Validators.required
            ])
            ],

            date_joined: [form.date_joined,
            Validators.compose([
              Validators.required
            ])
            ],

           master_emi_cmdr:[form.master_emi_cmdr],
           generalsmo:[form.generalsmo],
           prebate:[form.prebate],
           year1:[form.year1],
           capt_general:[form.capt_general],
           sword_bearer:[form.sword_bearer],
           district_emi_cmdr:[form.district_emi_cmdr],
           recorder:[form.recorder],
           stand_bearer:[form.stand_bearer],
           treasurer:[form.treasurer],
           emi_cmdr:[form.emi_cmdr],
           year2:[form.year2],
           warden:[form.warden],
           sr_warden:[form.sr_warden],
           sentinel:[form.sentinel],
           year3:[form.year3],
           jr_warden:[form.jr_warden]
           
	});
  loading.dismiss();
 }
 _submitComman(){
     let loading = this.loader.create({
        content: 'Loading...'
      });
     if(this._commanderyForm.valid)
     {
      loading.present();
       this.commonService.commData(this._commanderyForm.value).then((result) => {
         //console.log(result);
         loading.dismiss();
           let alert = this.alertCtrl.create({
          title: result.status.toUpperCase(),
          message: result.msg,
          buttons: [{
              text:'Ok',
              handler:()=>{
                //this.navCtrl.push(ProfilePage);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommanderyPage');
  }

}
