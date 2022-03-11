import { Injectable } from '@angular/core';
import { Status, StatusDto } from '../types/status.types';
import * as status from './../../../__mock__/schedules-status.json';


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  public status?: Status[];

  constructor() {
    this.status = (status as unknown as StatusDto).default?.data;
  }

  public get(id:any):Status | undefined {
    return this.status?.filter((status) => status.id === id )[0];
  }
}
