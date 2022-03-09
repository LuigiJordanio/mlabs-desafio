import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';

@Component({
  selector: 'mlb-post-linkedin-header',
  templateUrl: './mlb-post-linkedin-header.component.html',
  styleUrls: ['./mlb-post-linkedin-header.component.scss']
})
export class MlbPostLinkedinHeaderComponent implements OnInit {

  @Required()
  @Input('mlb-name') name!:string;

  @Input('mlb-date') date!:Date;

  @Input('mlb-description') description?:string;

  ngOnInit(): void {
  }

}
