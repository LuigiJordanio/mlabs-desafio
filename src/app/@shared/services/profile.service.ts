import { Injectable } from '@angular/core';
import { Profile } from '../types/profile.types';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _profile!:Profile;

  constructor() {
    this._profile = {
      name:'Luigi Jordânio',
    }
  }

  get profile():Profile {
    return this._profile;
  }
}
