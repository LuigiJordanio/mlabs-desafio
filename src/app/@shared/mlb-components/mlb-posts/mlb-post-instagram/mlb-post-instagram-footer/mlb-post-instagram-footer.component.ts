import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mlb-post-instagram-footer',
  templateUrl: './mlb-post-instagram-footer.component.html',
  styleUrls: ['./mlb-post-instagram-footer.component.scss']
})
export class MlbPostInstagramFooterComponent implements OnInit {



  @Input('mlb-description') description?:string;

  ngOnInit(): void {
  }

}
