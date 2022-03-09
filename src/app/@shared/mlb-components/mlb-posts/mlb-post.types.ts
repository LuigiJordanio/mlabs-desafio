export type sizesPost  = 'standard' | 'small';

export interface Post {
  profileName:string;
  date:Date;
  description?:string;
  imageUrl:string;
  qntComment?:number;
}
