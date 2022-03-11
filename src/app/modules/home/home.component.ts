import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/@shared/services/profile.service';
import { Profile } from 'src/app/@shared/types/profile.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public profile!:Profile;

  constructor(private profileService:ProfileService){

  }
  ngOnInit(): void {
    this.profile = this.profileService.profile;
  }
}
