import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';

@Component({
  selector: 'mlb-status',
  templateUrl: './mlb-status.component.html',
  styleUrls: ['./mlb-status.component.scss']
})
export class MlbStatusComponent implements OnInit {



  @Required()
  @Input('mlb-status') status!:any;

  ngOnInit(): void {

    console.log(this.status)
  }

}
