import { ConsoleLogService } from '../services/console-log.service';

export function ChildrenRequired(warnOptional?: boolean) {
  return function (target: any, key: string): void {
    const NG_AFTER_VIEW_INIT = 'ngAfterViewInit';

    const consoleLogService: ConsoleLogService = new ConsoleLogService();

    target[NG_AFTER_VIEW_INIT] = function () {

      if (!this[key].nativeElement.innerText) {
        throw new Error(`O componente precisa de conteudo interno`);
      }

    };
  };
}
