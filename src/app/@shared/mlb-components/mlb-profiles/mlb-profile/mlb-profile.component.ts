import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/@shared/decorators/required.decorator';
import { ProfileComponent } from '../mlb-profile.types';

@Component({
  selector: 'mlb-profile',
  templateUrl: './mlb-profile.component.html',
  styleUrls: ['./mlb-profile.component.scss']
})
export class MlbProfileComponent implements OnInit {



  @Required()
  @Input('mlb-profile') profile!:ProfileComponent;

  ngOnInit(): void {}

}
