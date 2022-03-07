import { Component, Input, OnInit } from '@angular/core';
import { typeInput } from '../mlb-button.types';

@Component({
  selector: 'mlb-form-input',
  templateUrl: './mlb-form-input.component.html',
  styleUrls: ['./mlb-form-input.component.scss']
})
export class MlbFormInputComponent implements OnInit {

  @Input('mlb-type') type: typeInput = 'text';

  @Input('mlb-placeholder') placeholder?: string;

  public readonly icon = {
    date: 'calendar',
    time: 'clock'
  }

  constructor() { }

  ngOnInit(): void { }
}
