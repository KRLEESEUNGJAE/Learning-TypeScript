{
  /**
   * Type Assertions 💩
   */

  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😰

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // 😰 (!)무조건 undefined 아니야 라는 의미, 정말 확신할 때만 사용

  //* Type assertion은 타입을 정말 확신하는 상황이 아니라면 지양하는 것이 좋다.
}
