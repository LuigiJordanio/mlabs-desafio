import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mlb-post-linkedin-footer',
  templateUrl: './mlb-post-linkedin-footer.component.html',
  styleUrls: ['./mlb-post-linkedin-footer.component.scss']
})
export class MlbPostLinkedinFooterComponent implements OnInit {


  @Input('mlb-qnt-comment') qntComment?:number;

  ngOnInit(): void {
  }

}
