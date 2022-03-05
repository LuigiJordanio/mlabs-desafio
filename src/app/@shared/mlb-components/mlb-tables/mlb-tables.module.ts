import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbTableComponent } from './mlb-table/mlb-table.component';



@NgModule({
  declarations: [
    MlbTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MlbTableComponent
  ]
})
export class MlbTablesModule { }
