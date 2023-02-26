// 한 파일에서 default는 한개만 가능하다.
export default function add(a, b) {
  return a + b;
}

export function addTwoNum(a, b) {
  return a + b;
}

// 나머지는 export
export function print() {
  console.log('hello world!');
}

export const number = 777;
