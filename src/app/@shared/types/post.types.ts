import { SafeUrl } from "@angular/platform-browser";
import { SocialNetwork } from "./socialNetwork.types";

export interface Post {
  id?:number;
  social_network_key?:number[] | SocialNetwork[];
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
