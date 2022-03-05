import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbCardComponent } from './mlb-card/mlb-card.component';



@NgModule({
  declarations: [
    MlbCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MlbCardComponent
  ]
})
export class MlbCardsModule { }
