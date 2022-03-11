import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';
import { HeadersTable } from '../mlb-table.types';

@Component({
  selector: 'mlb-table',
  templateUrl: './mlb-table.component.html',
  styleUrls: ['./mlb-table.component.scss']
})
export class MlbTableComponent implements OnInit {

  @Required()
  @Input('mlb-headers') headers!:HeadersTable[];

  ngOnInit(): void {
  }

}
