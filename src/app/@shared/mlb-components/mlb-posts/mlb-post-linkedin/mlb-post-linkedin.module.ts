import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MlbPostLinkedinFooterComponent } from './mlb-post-linkedin-footer/mlb-post-linkedin-footer.component';
import { MlbPostLinkedinHeaderComponent } from './mlb-post-linkedin-header/mlb-post-linkedin-header.component';
import { MlbPostLinkedinComponent } from './mlb-post-linkedin/mlb-post-linkedin.component';



@NgModule({
  declarations: [
    MlbPostLinkedinHeaderComponent,
    MlbPostLinkedinFooterComponent,
    MlbPostLinkedinComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MlbPostLinkedinComponent
  ]
})
export class MlbPostLinkedinModule { }
