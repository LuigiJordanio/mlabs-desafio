export interface Status {
  id:number;
  name:string;
  color:string;
}



export interface StatusDto {
  default:{
    data:Status[]
  }
}
