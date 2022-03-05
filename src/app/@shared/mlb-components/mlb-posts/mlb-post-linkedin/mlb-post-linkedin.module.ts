import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbPostLinkedinHeaderComponent } from './mlb-post-linkedin-header/mlb-post-linkedin-header.component';
import { MlbPostLinkedinFooterComponent } from './mlb-post-linkedin-footer/mlb-post-linkedin-footer.component';



@NgModule({
  declarations: [
    MlbPostLinkedinHeaderComponent,
    MlbPostLinkedinFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MlbPostLinkedinModule { }
