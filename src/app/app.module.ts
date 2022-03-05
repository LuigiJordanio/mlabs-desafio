import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConsoleLogService } from './@shared/services/console-log.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ConsoleLogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
