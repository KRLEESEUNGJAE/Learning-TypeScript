{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript 👍
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript 👍
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
  lastName?: string 대신 
  lastName: string | undefined 또한 가능하지만 
  이런 경우에는 
  printName('seungjae', undefined); 이와 같이 명시적으로 undefined를 작성해야 함.
  하지 않을 경우 에러 발생!
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
