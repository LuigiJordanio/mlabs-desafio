import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';

@Component({
  selector: 'mlb-post-instagram-header',
  templateUrl: './mlb-post-instagram-header.component.html',
  styleUrls: ['./mlb-post-instagram-header.component.scss']
})
export class MlbPostInstagramHeaderComponent implements OnInit {


  @Required()
  @Input('mlb-name') name!:string;

  ngOnInit(): void {
  }

}
