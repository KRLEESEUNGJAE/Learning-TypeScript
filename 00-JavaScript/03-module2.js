/**
 * default로 export된 함수는 새로운 이름으로 import해서 사용할 수 있다.
 * default가 아닌 것들은 중괄호로 감싸서 import, 새로운 이름으로 사용하고 싶다면 as를 사용
 */
// import run, { print as printHello } from './03-module1.js';

// console.log(run(1, 2));
// console.log(printHello());

import * as calculator from './03-module1.js';
console.log(calculator.addTwoNum(1, 2));
calculator.print();
console.log(calculator.number);
