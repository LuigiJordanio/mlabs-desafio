import { Component, Input, OnInit } from '@angular/core';
import { typeInput } from '../mlb-form.types';

@Component({
  selector: 'mlb-form-input',
  templateUrl: './mlb-form-input.component.html',
  styleUrls: ['./mlb-form-input.component.scss']
})
export class MlbFormInputComponent implements OnInit {

  constructor() { }

  @Input('mlb-value') value: typeInput = 'text';

  @Input('mlb-type') type: typeInput = 'text';

  @Input('mlb-placeholder') placeholder!: string;

  @Input('mlb-id') id!: string;

  @Input('mlb-name') name!: string;

  private _icon!: string;

  @Input('mlb-icon') set icon(value: string) {
    if (!value.startsWith('fa-')) throw new Error(`Apenas ícones da biblioteca fontawesome são aceitos`);
    this._icon = value;
  }

  get icon() {
    return this._icon;
  }

  ngOnInit(): void {
    // this.id = this.id ?? this.name;
  }

}
