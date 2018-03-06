import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,MenuController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../providers/commonService';
import { regexPatterns } from '../../validators/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { CommanderyPage } from '../commandery/commandery';
/**
 * Generated class for the CouncilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-council',
  templateUrl: 'council.html',
})
export class CouncilPage {

	private _councilForm: FormGroup;
	public user_id;
	public council;
	public editdata;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private _formBuilder: FormBuilder,
  	public globalvars:GlobalVars,
  	public commonService: CommonService,
  	public loader:LoadingController,
    private menu: MenuController,
  	private alertCtrl: AlertController) {

  	this.user_id = this.globalvars.getUserdata();
  	 this.commonService.council(this.user_id).then((result) => {
     
       this.editdata = result.data;
      
       if(this.editdata !=''){
         this.council = this.editdata;
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
      this.onFormLoad(this.council);
     },3000);

     this._councilForm = this._formBuilder.group({
  		id:[""],
  		user_id:[""],
  		//council_name
          council_name: ["",
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
          council_no: ["",
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
          most_il_master:[""],
          deputy_master:[""],
          steward:[""],
          year1:[""],
          princ_cond_of_work:[""],
          chaptain:[""],
          district_il_master:[""],
          recorder:[""],
          sentinel:[""],
          year2:[""],
          treasurer:[""],
          marshal:[""],
          illustrious_master:[""],
          capt_of_guard:[""],
          year3:[""],
          cond_of_council:[""]
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
  
	this._councilForm = this._formBuilder.group({
		 id:[form.id],
		 user_id :[this.user_id.id],
		 council_name: [form.council_name,
            Validators.compose([
              Validators.required
            ])
            ],

            council_no: [form.council_no,
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

           most_il_master:[form.most_il_master],
           deputy_master:[form.deputy_master],
           year1:[form.year1],
           princ_cond_of_work:[form.princ_cond_of_work],
           chaptain:[form.chaptain],
           steward:[form.steward],
           recorder:[form.recorder],
           district_il_master:[form.district_il_master],
           sentinel:[form.sentinel],
           treasurer:[form.treasurer],
           year2:[form.year2],
           marshal:[form.marshal],
           illustrious_master:[form.illustrious_master],
           capt_of_guard:[form.capt_of_guard],
           year3:[form.year3],
           cond_of_council:[form.cond_of_council]
           
	});
 loading.dismiss();
 }
 _submitCouncil(){
     let loading = this.loader.create({
        content: 'Loading...'
      });
     if(this._councilForm.valid)
     {
      loading.present();
       this.commonService.councilData(this._councilForm.value).then((result) => {
         //console.log(result);
         loading.dismiss();
           let alert = this.alertCtrl.create({
          title: result.status.toUpperCase(),
          message: result.msg,
          buttons: [{
              text:'Ok',
              handler:()=>{
                //this.navCtrl.push(CommanderyPage);
                this.navCtrl.setRoot(CommanderyPage);
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
    console.log('ionViewDidLoad CouncilPage');
  }

}
