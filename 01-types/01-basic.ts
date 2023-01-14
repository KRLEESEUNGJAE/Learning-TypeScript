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
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 7;
  function findOne(): string | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let man: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'sure?';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hi');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'seungjae' });
  acceptSomeObject({ animal: 'cat' });
}
