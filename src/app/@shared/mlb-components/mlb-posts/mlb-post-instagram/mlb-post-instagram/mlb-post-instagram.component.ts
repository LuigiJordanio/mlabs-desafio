import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';
import { Post, sizesPost } from '../../mlb-post.types';

@Component({
  selector: 'mlb-post-instagram',
  templateUrl: './mlb-post-instagram.component.html',
  styleUrls: ['./mlb-post-instagram.component.scss']
})
export class MlbPostInstagramComponent implements OnInit {




  @Input('mlb-size') size:sizesPost = 'standard';

  @Required()
  @Input('mlb-post') post!:Post;

  ngOnInit(): void {
  }

}
