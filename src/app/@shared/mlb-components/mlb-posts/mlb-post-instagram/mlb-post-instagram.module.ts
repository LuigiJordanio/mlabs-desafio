import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbPostInstagramComponent } from './mlb-post-instagram/mlb-post-instagram.component';
import { MlbPostInstagramHeaderComponent } from './mlb-post-instagram-header/mlb-post-instagram-header.component';
import { MlbPostInstagramFooterComponent } from './mlb-post-instagram-footer/mlb-post-instagram-footer.component';



@NgModule({
  declarations: [
    MlbPostInstagramComponent,
    MlbPostInstagramHeaderComponent,
    MlbPostInstagramFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MlbPostInstagramComponent,
    MlbPostInstagramHeaderComponent,
    MlbPostInstagramFooterComponent
  ]
})
export class MlbPostInstagramModule { }
