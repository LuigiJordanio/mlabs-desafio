import { Component, OnInit } from '@angular/core';
import { HeadersTable } from 'src/app/@shared/mlb-components/mlb-tables/mlb-table.types';
import { PostService } from 'src/app/@shared/services/post.service';
import { Post } from 'src/app/@shared/types/post.types';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  public readonly headersTable: HeadersTable[] = [
    {
      label: 'Redes sociais',
    },
    {
      label: 'Mídia',
    },
    {
      label: 'Texto',
      cssClassAdditions: 'mlb-w-600'
    },
    {
      label: 'Data',
      isOrder: true
    },
    {
      label: 'Ações',
    },
    {
      label: 'Status',
    },
  ]

  public posts?: Post[];
  public activePost?:Post;

  public constructor(private postService: PostService) { }

  ngOnInit() : void {
    this.posts = this.postService.listFormat();
  }

  public showDetail(post:any){
    this.activePost = post;
  }


  public getHasSocialSelected(post: any, social:string): boolean {
    console.log(post)
    return post.social_network_key.some((select:any) => select.name == social)
  }

}
