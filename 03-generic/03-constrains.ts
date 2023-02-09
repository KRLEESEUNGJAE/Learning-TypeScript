interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log('part time!');
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 디시 리턴하는 함수 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const json = new FullTimeEmployee();
const lee = new PartTimeEmployee();

json.workFullTime();
lee.workPartTime();

const jsonAfterPay = pay(json);
const leeAfterPay = pay(lee);

jsonAfterPay.workFullTime();
leeAfterPay.workPartTime();

const obj = {
  name: 'lee',
  age: 30,
};

const obj2 = {
  emoji: '😀',
};

console.log(getValue(obj, 'name')); // lee
console.log(getValue(obj, 'age')); // 30
console.log(getValue(obj2, 'emoji')); // 😀

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
