import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,MenuController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
import { CommonService } from '../../providers/commonService';
import { regexPatterns } from '../../validators/regexPatterns';
import { CouncilPage } from '../council/council';
/**
 * Generated class for the ChapterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter',
  templateUrl: 'chapter.html',
})
export class ChapterPage {

private _chapterForm: FormGroup;
public user_id;
public chapter;
public editdata;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private _formBuilder: FormBuilder,
  	public globalvars:GlobalVars,
  	public commonService: CommonService,
  	public loader:LoadingController,
    private menu: MenuController,
  	private alertCtrl: AlertController
  	) {

  	this.user_id = this.globalvars.getUserdata();

     this.commonService.chapter(this.user_id).then((result) => {
     	
       this.editdata = result.data;
       
       if(this.editdata !=''){
         this.chapter = this.editdata;
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
       this.onFormLoad(this.chapter);
     },3000);

  	this._chapterForm = this._formBuilder.group({
  		id:[""],
  		user_id:[""],
  		//chapter_name
          chapter_name: ["",
            Validators.compose([
              Validators.required
            ])
          ],
           //chapter_no
          chapter_no: ["",
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
          most_high_priest:[""],
          year1:[""],
          district_high_priest:[""],
          year2:[""],
          hight_priest:[""],
          year3:[""],
          king:[""],
          scribe:[""],
          secretary:[""],
          treasurer:[""],
          capt_host:[""],
          principal_sojourner:[""],
          ra_captain:[""],
          master_vef_1:[""],
          master_vef_2:[""],
          master_vef_3:[""],
          chaptain:[""],
          sentinel:[""]
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

	this._chapterForm = this._formBuilder.group({
    
		 id:[form.id],
		 user_id :[this.user_id.id],
		 chapter_name: [form.chapter_name,
            Validators.compose([
              Validators.required
            ])
            ],

            chapter_no: [form.chapter_no,
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

           most_high_priest:[form.most_high_priest],
           year1:[form.year1],
           district_high_priest:[form.district_high_priest],
           year2:[form.year2],
           hight_priest:[form.hight_priest],
           year3:[form.year3],
           king:[form.king],
           scribe:[form.scribe],
           secretary:[form.secretary],
           treasurer:[form.treasurer],
           capt_host:[form.capt_host],
           principal_sojourner:[form.principal_sojourner],
           ra_captain:[form.ra_captain],
           master_vef_1:[form.master_vef_1],
           master_vef_2:[form.master_vef_2],
           master_vef_3:[form.master_vef_3],
           chaptain:[form.chaptain],
           sentinel:[form.sentinel]
	});

  loading.dismiss();
}
_submitChapter(){
     let loading = this.loader.create({
        content: 'Loading...'
      });
     if(this._chapterForm.valid)
     {
      loading.present();
       this.commonService.chapterData(this._chapterForm.value).then((result) => {
         //console.log(result);
         loading.dismiss();
           let alert = this.alertCtrl.create({
          title: result.status.toUpperCase(),
          message: result.msg,
          buttons: [{
              text:'Ok',
              handler:()=>{
                //this.navCtrl.push(CouncilPage);
                this.navCtrl.setRoot(CouncilPage);
                
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
    console.log('ionViewDidLoad ChapterPage');
  }

}
