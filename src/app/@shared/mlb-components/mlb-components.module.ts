import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MlbButtonsModule } from './mlb-buttons/mlb-buttons.module';
import { MlbCardsModule } from './mlb-cards/mlb-cards.module';
import { MlbFormsModule } from './mlb-forms/mlb-forms.module';
import { MlbLayoutsModule } from './mlb-layouts/mlb-layouts.module';
import { MlbPostsModule } from './mlb-posts/mlb-posts.module';
import { MlbProfilesModule } from './mlb-profiles/mlb-profiles.module';
import { MlbStatusesModule } from './mlb-statuses/mlb-statuses.module';
import { MlbTablesModule } from './mlb-tables/mlb-tables.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MlbButtonsModule,
    MlbCardsModule,
    MlbFormsModule,
    MlbLayoutsModule,
    MlbPostsModule,
    MlbProfilesModule,
    MlbStatusesModule,
    MlbTablesModule
  ],
  exports: [
    MlbButtonsModule,
    MlbCardsModule,
    MlbFormsModule,
    MlbLayoutsModule,
    MlbPostsModule,
    MlbProfilesModule,
    MlbStatusesModule,
    MlbTablesModule,
  ]
})
export class MlbComponentsModule { }
