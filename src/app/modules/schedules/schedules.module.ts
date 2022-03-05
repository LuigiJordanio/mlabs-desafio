import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScheduleListComponent } from './pages/schedule-list/schedule-list.component';
import { ScheduleSaveComponent } from './pages/schedule-save/schedule-save.component';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';



@NgModule({
  declarations: [
    SchedulesComponent,
    ScheduleSaveComponent,
    ScheduleListComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule
  ]
})
export class SchedulesModule { }
