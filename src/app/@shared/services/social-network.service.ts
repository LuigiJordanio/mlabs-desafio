import { Injectable } from '@angular/core';
import { SocialNetworkDto } from 'src/app/modules/schedules/schedules.dto';
import { SocialNetwork } from '../types/socialNetwork.types';
import * as socialNetoworks from './../../../__mock__/social-networks.json';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService {

  public socialNetworks?: SocialNetwork[];

  constructor() {
    this.socialNetworks = (socialNetoworks as SocialNetworkDto).default?.data;
  }

  public get(id:any):SocialNetwork[] | undefined {
    return this.socialNetworks?.filter((social) => social.id === id || id?.includes(social.id));
  }

  public getSortedEnabled() {
    return this.socialNetworks?.sort((beforeSocial, nextSocial) => (beforeSocial.status < nextSocial.status) ? 1 : -1);
  }

}
