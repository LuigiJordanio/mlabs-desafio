import { Injectable } from '@angular/core';
import * as posts from '../../../__mock__/schedules.json';
import { Post, PostDto } from '../types/post.types';
import { SocialNetworkService } from './social-network.service';
import { StatusService } from './status.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  public listPost: Post[];
  public listPostSketch?: Post[];

  constructor(private socialNetworkService: SocialNetworkService, private statusService:StatusService) {
    this.listPost = (posts as unknown as PostDto).default.data;
  }

  saveStorage() {
    localStorage.setItem('posts', JSON.stringify(this.listPost));
  }

  updateStorage() {
    this.listPost = JSON.parse(localStorage.getItem('posts') || JSON.stringify(this.listPost));
    return this.listPost;
  }

  list():Post[] {
    this.updateStorage();
    return this.listPost;
  }

  listFormat() {
    return this.list().map((post) => {
      return {
        ...post,
        post: new Date(post.publication_date).toLocaleDateString(),
        social_network_key: this.socialNetworkService.get(post.social_network_key) ?? [],
        status_key: this.statusService.get(post.status_key)
      };
    })
  }

  get(id: number) {
    this.updateStorage();
    return this.listPost?.filter((post) => post.id === id);
  }

  getSketchs(id: number) {
    this.listPostSketch = JSON.parse(localStorage.getItem('listPostSketch') || '{}');
    return this.listPostSketch;
  }

  saveSketch(post: Post) {
    this.listPostSketch?.push(post)
    localStorage.setItem('listPostSketch', JSON.stringify(this.listPostSketch));
  }

  getLastId() {
    const id = this.listPost[this.listPost.length - 1].id ?? 0;
    return id + 1;
  }

  async save(post: Post) {
    this.updateStorage();

    let imageBase64 = await (await fetch((post.media).toString())).blob();
    const imageConverted = await this.blobToBase64(imageBase64);

    post.media = imageConverted!.toString();
    post.id = this.getLastId();

    this.listPost.push(post);
    this.saveStorage();
  }

  blobToBase64(blob: Blob): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
}
