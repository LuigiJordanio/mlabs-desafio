import { Component, Input, ViewChild } from '@angular/core';
import { ChildrenRequired } from 'src/app/@shared/decorators/children-required.decorator';
import { categoryButton, typeButton } from '../mlb-button.types';

@Component({
  selector: 'mlb-button',
  templateUrl: './mlb-button.component.html',
  styleUrls: ['./mlb-button.component.scss'],

})
export class MlbButtonComponent {

  @ChildrenRequired()
  @ViewChild('content') content:any;

  @Input('mlb-category') category:categoryButton = 'tertiary';

  @Input('mlb-type') type:typeButton = 'button';

  @Input('mlb-is-loading') isLoading:boolean = false;

  constructor() {}



}
