import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MlbPostInstagramFooterComponent } from './mlb-post-instagram-footer/mlb-post-instagram-footer.component';
import { MlbPostInstagramHeaderComponent } from './mlb-post-instagram-header/mlb-post-instagram-header.component';
import { MlbPostInstagramComponent } from './mlb-post-instagram/mlb-post-instagram.component';



@NgModule({
  declarations: [
    MlbPostInstagramComponent,
    MlbPostInstagramHeaderComponent,
    MlbPostInstagramFooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MlbPostInstagramComponent,
    MlbPostInstagramHeaderComponent,
    MlbPostInstagramFooterComponent
  ]
})
export class MlbPostInstagramModule { }
