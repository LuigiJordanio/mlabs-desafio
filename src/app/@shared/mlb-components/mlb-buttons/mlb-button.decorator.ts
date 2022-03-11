export function TransformSocialNetwork() {
  return function (target: any, key: any): void {
    const NG_ON_INIT = 'ngOnInit';

    const original: Function | null = target[NG_ON_INIT];

    target[NG_ON_INIT] = function () {

      const valueKey = this[key];

      if (valueKey === undefined) {
        throw new Error(`A propriedade ${key} é obrigatória`);
      }

      /**
       * Dicionário para mapear ícones que tem o nome diferente da rede social
       */
      const mapIcons: any = {
        facebook: 'facebook-f',
        linkedin: 'linkedin-in',
      };

      this[key] = mapIcons[valueKey] ?? valueKey;

      if (original) {
        original.apply(this);
      }
    };
  };
}
