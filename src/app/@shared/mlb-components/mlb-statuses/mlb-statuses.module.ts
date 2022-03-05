import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbStatusComponent } from './mlb-status/mlb-status.component';



@NgModule({
  declarations: [
    MlbStatusComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MlbStatusComponent
  ]
})
export class MlbStatusesModule { }
