import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MlbFormDatePickerComponent } from 'src/app/@shared/mlb-components/mlb-forms/mlb-form-datepicker/mlb-form-datepicker.component';
import { MlbFormInputComponent } from 'src/app/@shared/mlb-components/mlb-forms/mlb-form-input/mlb-form-input.component';
import { MlbFormTextareaComponent } from 'src/app/@shared/mlb-components/mlb-forms/mlb-form-textarea/mlb-form-textarea.component';
import { ProfileService } from 'src/app/@shared/services/profile.service';
import { SocialNetworkService } from 'src/app/@shared/services/social-network.service';
import { Post } from 'src/app/@shared/types/post.types';
import { SchedulesService } from '../../schedules.service';
import { SocialNetwork } from './../../../../@shared/types/socialNetwork.types';


@Component({
  selector: 'app-schedule-save',
  templateUrl: './schedule-save.component.html',
  styleUrls: ['./schedule-save.component.scss']
})
export class ScheduleSaveComponent implements OnInit {


  @ViewChild('date') datepickerInput!: MlbFormDatePickerComponent;
  @ViewChild('time') time!: MlbFormInputComponent;
  @ViewChild('description') description!: MlbFormTextareaComponent;

  public socialNetworks?: SocialNetwork[];
  public isLoading:boolean = false;
  public statusImagem: string = 'Arraste e solte uma imagem aqui ou clique no botão abaixo';
  public socialSelecteds: SocialNetwork[] = [];

  public post: Post =
    {
      publication_date: new Date(),
      text: '',
      social_network_key:[],
      status_key:0,
      media: ''
    };

  constructor(
    private networkSocialService: SocialNetworkService,
    private scheduleService: SchedulesService,
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.socialNetworks = this.networkSocialService.getSortedEnabled();
  }

  ngAfterContentChecked(): void {
    this.post.text = this.description?.value;
  }

  public getHasTypeSocialSelecteds(socialType: string): boolean {
    return this.socialSelecteds.some((select) => select.name == socialType)
  }

  public selectSocial(socialNetwork: SocialNetwork) {
    const indexSocial = this.socialSelecteds.indexOf(socialNetwork);

    if (indexSocial == -1) {
      this.socialSelecteds.push(socialNetwork);
      return;
    }
    this.socialSelecteds.splice(indexSocial, 1);
  }

  public droppedImage(event: string) {
    this.post.media = event;
    this.statusImagem = 'Imagem selecionada';
  }

  public postIsValid() {

    const validityForm = {
      imageUrl: this.post.media,
      date: this.datepickerInput?.value?.singleDate?.formatted,
      time: this.time?.value,
      selectedNetwork: this.socialSelecteds.length
    }
    return Object.values(validityForm).some((key:any) => key === null || key === '' || key === undefined || key === 0);
  }

  salvarPost() {
    const socialSelecteds = this.socialSelecteds.map((social) => social.id);
    const datePublication = new Date(this.datepickerInput.value.singleDate.jsDate);

    const hourPublication: number = parseInt(this.time.value.split(':')[0])
    const minutePublication: number = parseInt(this.time.value.split(':')[0])

    datePublication.setUTCHours(hourPublication)
    datePublication.setMinutes(minutePublication)

    const savedPost: Post = {
      id: 0,
      publication_date: datePublication.toISOString(),
      text: this.description.value,
      media: this.post.media,
      status_key: 1,
      social_network_key: [...socialSelecteds],
    }

    this.scheduleService.savePost(savedPost);
    this.isLoading = true;

    setTimeout(() =>{
      this.router.navigate(['/schedules/list'])
      this.isLoading = false;
    },500)

  }
}
