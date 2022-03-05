import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MlbLayoutFooterComponent } from './mlb-layout-footer/mlb-layout-footer.component';
import { MlbLayoutHeaderComponent } from './mlb-layout-header/mlb-layout-header.component';

@NgModule({
  declarations: [MlbLayoutHeaderComponent, MlbLayoutFooterComponent],
  imports: [CommonModule],
  exports: [MlbLayoutHeaderComponent, MlbLayoutFooterComponent],
})
export class MlbLayoutsModule {}
