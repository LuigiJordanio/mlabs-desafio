export function Required() {

  return function (target: any, key: string): void{

      const NG_ON_INIT = 'ngOnInit';

      const original: Function | null = target[NG_ON_INIT];

      target[NG_ON_INIT] = function () {

          if (this[key] === undefined) {
              throw new Error(`A propriedade ${key} é obrigatória`);
          }

          if (original) {
              original.apply(this);
          }
      };
  };
}
