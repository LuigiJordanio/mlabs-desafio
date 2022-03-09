import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MlbPostInstagramModule } from './mlb-post-instagram/mlb-post-instagram.module';
import { MlbPostLinkedinModule } from './mlb-post-linkedin/mlb-post-linkedin.module';
import { MlbPostComponent } from './mlb-post/mlb-post.component';

@NgModule({
  declarations: [MlbPostComponent],
  imports: [CommonModule,  MlbPostInstagramModule,MlbPostLinkedinModule],
  exports: [MlbPostComponent,MlbPostInstagramModule,MlbPostLinkedinModule],
})
export class MlbPostsModule {}
