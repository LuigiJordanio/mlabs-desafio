import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { MlbButtonsModule } from '../mlb-buttons/mlb-buttons.module';
import { MlbFormDatePickerComponent } from './mlb-form-datepicker/mlb-form-datepicker.component';
import { MlbFormInputDroppableComponent } from './mlb-form-input-droppable/mlb-form-input-droppable.component';
import { MlbFormInputComponent } from './mlb-form-input/mlb-form-input.component';
import { MlbFormTextareaComponent } from './mlb-form-textarea/mlb-form-textarea.component';

@NgModule({
  declarations: [
    MlbFormDatePickerComponent,
    MlbFormInputDroppableComponent,
    MlbFormTextareaComponent,
    MlbFormInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PickerModule,
    MlbButtonsModule,
    FormsModule,
    AngularMyDatePickerModule
  ],
  exports: [
    MlbFormDatePickerComponent,
    MlbFormInputDroppableComponent,
    MlbFormTextareaComponent,
    MlbFormInputComponent
  ]
})
export class MlbFormsModule { }
