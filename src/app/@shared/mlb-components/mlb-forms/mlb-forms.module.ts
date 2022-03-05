import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbFormInputComponent } from './mlb-form-input/mlb-form-input.component';
import { MlbFormInputDroppableComponent } from './mlb-form-input-droppable/mlb-form-input-droppable.component';
import { MlbFormTextareaComponent } from './mlb-form-textarea/mlb-form-textarea.component';



@NgModule({
  declarations: [
    MlbFormInputComponent,
    MlbFormInputDroppableComponent,
    MlbFormTextareaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MlbFormInputComponent,
    MlbFormInputDroppableComponent,
    MlbFormTextareaComponent
  ]
})
export class MlbFormsModule { }
