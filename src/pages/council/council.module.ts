import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouncilPage } from './council';

@NgModule({
  declarations: [
    CouncilPage,
  ],
  imports: [
    IonicPageModule.forChild(CouncilPage),
  ],
})
export class CouncilPageModule {}
