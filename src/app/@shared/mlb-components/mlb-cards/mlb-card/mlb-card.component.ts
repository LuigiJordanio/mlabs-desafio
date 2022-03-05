import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChildrenRequired } from 'src/app/@shared/decorators/children-required.decorator';

@Component({
  selector: 'mlb-card',
  templateUrl: './mlb-card.component.html',
  styleUrls: ['./mlb-card.component.scss']
})
export class MlbCardComponent implements OnInit {

  @ChildrenRequired(true)
  @ViewChild('content') content:any;


  @Input('mlb-title') title?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
