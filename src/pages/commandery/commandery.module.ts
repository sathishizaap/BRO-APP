import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommanderyPage } from './commandery';

@NgModule({
  declarations: [
    CommanderyPage,
  ],
  imports: [
    IonicPageModule.forChild(CommanderyPage),
  ],
})
export class CommanderyPageModule {}
