import { ConsoleLogService } from '../services/console-log.service';

export function ChildrenRequired(warnOptional?: boolean) {
  return function (target: any, key: string): void {
    const NG_AFTER_VIEW_INIT = 'ngAfterViewInit';

    const consoleLogService: ConsoleLogService = new ConsoleLogService();

    target[NG_AFTER_VIEW_INIT] = function () {
      console.log(this[key].nativeElement.innerText);

      if (!this[key].nativeElement.innerText && !warnOptional) {
        throw new Error(`O componente precisa de conteudo interno`);
      }

      if (!this[key].nativeElement.innerText && warnOptional) {
        let parentComponentElement = this.content.nativeElement.parentElement;

        while(!parentComponentElement.tagName.toLowerCase().startsWith('mlb-'))
          parentComponentElement = parentComponentElement.parentElement;


        consoleLogService.warning(`O componente ${parentComponentElement.tagName.toLowerCase()} está sem conteudo`);
      }
    };
  };
}