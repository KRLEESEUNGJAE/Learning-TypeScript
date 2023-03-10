{
  // JavaScript π©
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript π
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript π©
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript π
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript
  // Optional parameter(`?`)
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  /*
  lastName?: string λμ  
  lastName: string | undefined λν κ°λ₯νμ§λ§ 
  μ΄λ° κ²½μ°μλ 
  printName('seungjae', undefined); μ΄μ κ°μ΄ λͺμμ μΌλ‘ undefinedλ₯Ό μμ±ν΄μΌ ν¨.
  νμ§ μμ κ²½μ° μλ¬ λ°μ!
  */
  printName('seungjae', 'lee');
  printName('seungjae');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: Array<number>): number {
    return numbers.reduce((sum, cur) => sum + cur);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
