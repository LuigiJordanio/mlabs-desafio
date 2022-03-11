import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mlb-post-linkedin-header',
  templateUrl: './mlb-post-linkedin-header.component.html',
  styleUrls: ['./mlb-post-linkedin-header.component.scss']
})
export class MlbPostLinkedinHeaderComponent implements OnInit {


  @Input('mlb-name') name!:string;

  @Input('mlb-date') date!:Date | string;

  @Input('mlb-description') description?:string;

  ngOnInit(): void {
  }

}
