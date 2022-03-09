import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbPostLinkedinHeaderComponent } from './mlb-post-linkedin-header/mlb-post-linkedin-header.component';
import { MlbPostLinkedinFooterComponent } from './mlb-post-linkedin-footer/mlb-post-linkedin-footer.component';
import { MlbPostLinkedinComponent } from './mlb-post-linkedin/mlb-post-linkedin.component';



@NgModule({
  declarations: [
    MlbPostLinkedinHeaderComponent,
    MlbPostLinkedinFooterComponent,
    MlbPostLinkedinComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MlbPostLinkedinComponent
  ]
})
export class MlbPostLinkedinModule { }
