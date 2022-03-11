import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';
import { Status } from '../mlb-status.types';

@Component({
  selector: 'mlb-status',
  templateUrl: './mlb-status.component.html',
  styleUrls: ['./mlb-status.component.scss']
})
export class MlbStatusComponent implements OnInit {



  @Required()
  @Input('mlb-status') status!:Status;

  ngOnInit(): void {
  }

}
