import { Component, Input, OnInit } from '@angular/core';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import { Required } from 'src/app/@shared/decorators/required.decorator';


@Component({
  selector: 'mlb-form-datepicker',
  templateUrl: './mlb-form-datepicker.component.html',
})
export class MlbFormDatePickerComponent implements OnInit {

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    alignSelectorRight: true,
    closeSelectorOnDateSelect: true,
    dateFormat: 'dd/mm'
  }

  public value?:any;

  @Input('mlb-placeholder') placeholder?: string;

  @Required()
  @Input('mlb-name') name?: string;

  @Input('mlb-id') id?: string;

  ngOnInit(): void { }

}
