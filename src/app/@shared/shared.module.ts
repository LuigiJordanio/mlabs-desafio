import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafePipe } from './pipes/safe.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    SafePipe,
  ],
  imports: [
    CommonModule
  ], exports: [
    TruncatePipe,
    SafePipe
  ]
})
export class SharedModule { }
