import { IAngularMyDpOptions } from 'angular-mydatepicker';

export type typeCalendarInput = 'date' | 'time';

export type typeInput = 'date' | 'time' | 'text' | 'number';


export interface Emoji  {
  emoji:{
    native:string;
  }
}


export type calendarTypesConfiguration = {
  date?: IAngularMyDpOptions
}
