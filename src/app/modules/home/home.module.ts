import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MlbComponentsModule } from 'src/app/@shared/mlb-components/mlb-components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ], imports: [
    CommonModule,
    ReactiveFormsModule,
    MlbComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
