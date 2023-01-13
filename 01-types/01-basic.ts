{
  /**
   * JavaScript
   * Privitive(원시타입): number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array... 그 외
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'hi';

  // boolean
  const bool: boolean = true;

  // undefined
  let name: undefined; //💩
  let age: number | undefined;
  age = undefined;
  age = 7;
  function findOne(): string | undefined {
    return undefined;
  }

  // null
  let person: null; //💩
  let man: string | null;
}
