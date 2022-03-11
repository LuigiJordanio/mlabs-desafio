import { SafeUrl } from "@angular/platform-browser";

export interface Post {
  id?:number;
  social_network_key:any;
  media:string | SafeUrl;
  text:string;
  publication_date:string | Date;
  status_key:number;
}

export interface PostDto {
  default:{
    data:Post[]
  }
}
