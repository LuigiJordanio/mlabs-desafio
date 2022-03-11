import { Injectable } from '@angular/core';
import { PostService } from 'src/app/@shared/services/post.service';
import { Post } from 'src/app/@shared/types/post.types';
import { SocialNetwork } from 'src/app/@shared/types/socialNetwork.types';


@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  public socialNetworks?: SocialNetwork[];

  constructor(private postService:PostService) {}

  public savePost(post:Post){
    this.postService.save(post);
  }
}
