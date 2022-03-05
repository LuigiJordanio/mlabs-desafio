import { Component, Input, OnInit } from '@angular/core';
import { TransformSocialNetwork } from '../mlb-button.decorator';
import { socialNetworkButton } from '../mlb-button.types';

@Component({
  selector: 'mlb-button-social',
  templateUrl: './mlb-button-social.component.html',
  styleUrls: ['./mlb-button-social.component.scss']
})
export class MlbButtonSocialComponent implements OnInit {

  @TransformSocialNetwork()
  @Input('mlb-social-network') socialNetwork!:socialNetworkButton;

  @Input('mlb-disabled') isDisabled:boolean = false;

  @Input('mlb-seleted') isSelected:boolean = false;

  public status!:string;

  constructor() { }

  ngOnInit(): void {


  }

}
