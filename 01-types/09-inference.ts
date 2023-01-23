/**
 * Type Inference
 */

let text = 'hello';
// text = 1;
//! 최초로 문자열 타입으로 할당한 변수에 숫자를 할당하면 타입스크립트에서 에러를 발생시킴
//! Type Inference
//! Type 'number' is not assignable to type 'string'.

function print(message = 'hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2);

//* 타입 추론을 이용하기 보다는 타입을 정확하게 명시하는 것이 좋다!
