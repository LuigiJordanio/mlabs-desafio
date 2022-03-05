import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MlbPostComponent } from './mlb-post/mlb-post.component';

@NgModule({
  declarations: [MlbPostComponent],
  imports: [CommonModule],
  exports: [MlbPostComponent],
})
export class MlbPostsModule {}
