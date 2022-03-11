import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MlbProfileComponent } from './mlb-profile/mlb-profile.component';



@NgModule({
  declarations: [
    MlbProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MlbProfileComponent
  ]
})
export class MlbProfilesModule { }
