import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';
import { ProfileService } from 'src/app/@shared/services/profile.service';
import { Post } from 'src/app/@shared/types/post.types';
import { sizesPost } from '../../mlb-post.types';

@Component({
  selector: 'mlb-post-instagram',
  templateUrl: './mlb-post-instagram.component.html',
  styleUrls: ['./mlb-post-instagram.component.scss']
})
export class MlbPostInstagramComponent implements OnInit {


  public nameProfile!:string;
  @Input('mlb-size') size:sizesPost = 'standard';

  @Required()
  @Input('mlb-post') post!:Post;

  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    this.nameProfile = this.profileService.profile.name;
  }

}
