import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileService } from './@shared/services/profile.service';

const routes: Routes = [
  {
    path: 'schedules',
    loadChildren: () =>
      import('./modules/schedules/schedules.module').then(
        (m) => m.SchedulesModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    ProfileService,
  ]
})
export class AppRoutingModule {}
