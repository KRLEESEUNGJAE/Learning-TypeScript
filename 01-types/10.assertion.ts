{
  /**
   * Type Assertions π©
   */

  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π°

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // π° (!)λ¬΄μ‘°κ±΄ undefined μλμΌ λΌλ μλ―Έ, μ λ§ νμ ν  λλ§ μ¬μ©

  //* Type assertionμ νμμ μ λ§ νμ νλ μν©μ΄ μλλΌλ©΄ μ§μνλ κ²μ΄ μ’λ€.
}
