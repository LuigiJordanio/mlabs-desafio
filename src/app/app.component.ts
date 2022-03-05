import { Component } from '@angular/core';
import { ConsoleLogService } from './@shared/services/console-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mlabs-desafio';

  constructor(private consoleLog: ConsoleLogService) {}

  ngOnInit() {
    this.consoleLog.showLogo();
  }
}
