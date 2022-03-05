import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbButtonComponent } from './mlb-button/mlb-button.component';
import { MlbButtonSocialComponent } from './mlb-button-social/mlb-button-social.component';



@NgModule({
  declarations: [
    MlbButtonComponent,
    MlbButtonSocialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MlbButtonComponent,
    MlbButtonSocialComponent
  ]
})
export class MlbButtonsModule { }
