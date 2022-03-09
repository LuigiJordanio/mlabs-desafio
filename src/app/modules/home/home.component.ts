import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { Post } from 'src/app/@shared/mlb-components/mlb-posts/mlb-post.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public post:Post[] = [
    {
      profileName:'Luigi',
      date:new Date(),
      qntComment:5,
      description:'Post do Luigi',
      imageUrl:'https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }
  ];

  public profile = {
    name:'Luigi',
    // image:'assets/img/default/profile.png'
  }

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
    // other options are here...
  };

  myDateInit: boolean = true;
  model: IMyDateModel | null = null;



  ngOnInit() {
    if (this.myDateInit) {
      // Initialize to specific date (14.05.2019) with IMyDate object
      this.model = {
        isRange: false, singleDate: {
          date: {
            year: 2019,
            month: 5,
            day: 14
          }
        }
      };
    }
    else {
      // Initialize to today with javascript date object
      this.model = { isRange: false, singleDate: { jsDate: new Date() } };
    }
  }

}
