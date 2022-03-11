import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MlbComponentsModule } from 'src/app/@shared/mlb-components/mlb-components.module';
import { SharedModule } from 'src/app/@shared/shared.module';
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
    MlbComponentsModule,
    RouterModule,
    SharedModule,
    SchedulesRoutingModule
  ]
})
export class SchedulesModule { }
