import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleListComponent } from './pages/schedule-list/schedule-list.component';
import { ScheduleSaveComponent } from './pages/schedule-save/schedule-save.component';
import { SchedulesComponent } from './schedules.component';

const routes: Routes = [
  {
    path: '', component: SchedulesComponent, children: [
      { path: 'save', component: ScheduleSaveComponent },
      { path: 'list', component: ScheduleListComponent },
    ]
  },
  // { path: 'list', component: ScheduleListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
