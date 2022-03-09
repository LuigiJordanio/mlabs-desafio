import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';
import { sizesPost } from '../../mlb-post.types';
import { Post } from './../../mlb-post.types';

@Component({
  selector: 'mlb-post-linkedin',
  templateUrl: './mlb-post-linkedin.component.html',
  styleUrls: ['./mlb-post-linkedin.component.scss']
})
export class MlbPostLinkedinComponent implements OnInit {


  @Input('mlb-size') size:sizesPost = 'standard';

  @Required()
  @Input('mlb-post') post!:Post;

  @Input('mlb-qnt-comments') qntComments?:number;




  ngOnInit(): void {
  }

}
