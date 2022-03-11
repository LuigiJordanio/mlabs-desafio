import { SocialNetwork } from "src/app/@shared/types/socialNetwork.types";

export interface SocialNetworkDto {
  default?:{
    data:SocialNetwork[]
  }
}

export interface ListPostDto {
  data:{
    id?:number;
    social_network_key: number[];
    media:string;
    publication_date:string;
    status_key:number;
  }
}

export interface SavePostDto {
    id?:number;
    social_network_key: number[];
    media:string;
    publication_date:string;
    status_key:number;
}
