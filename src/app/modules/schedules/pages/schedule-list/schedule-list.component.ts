import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  public activePost?: Post;

  public positionModal = {
    x: 0,
    y: 0
  }

  @ViewChild('detailModal')  detailModal?:ElementRef;

  public constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.listFormat();
  }

  public showDetail(post: Post,event:MouseEvent): void {
    console.log(event)

    if(this.activePost == post){
      this.activePost = undefined;
      return;
    }
      this.activePost = post;
      this.positionModal.x = event.pageX;
      this.positionModal.y = event.pageY + 150;
  }


  public getHasSocialSelected(post: any, social: string): boolean {
    console.log(post)
    return post.social_network_key.some((select: any) => select.name == social)
  }

}
