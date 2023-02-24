// nullish coalescing
const nullish = (text) => {
  const message = text ?? 'Nothing...';
  console.log(message);
};

nullish('hello');
nullish(null);
nullish(undefined);

const obj = {
  innerObj: {
    a: 'hello',
  },
};
// default parameter을 사용하는 경우 null을 걸러주지 못하기 때문에 대체해서 사용 가능할 것 같음.
// logical or 연산자는 falsy값 다 걸러줌(undefined, null, 0, -0, false, NaN, '', "", ``)

const test = () => {
  if (obj.innerObj && obj.innerObj.a) {
    console.log(obj.innerObj.a);
  } else {
    console.log("It's nothing");
  }

  if (obj.innerObj?.a) {
    console.log(obj.innerObj.a);
  } else {
    console.log("It's nothing");
  }

  // optional chaining & nullish coalescing
  const result = obj.innerObj?.a ?? "It's nothing";
  console.log(result);
};
test();

// 배열 중복제거
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(arr);
console.log([...new Set(arr)]);

// looping
const items = [1, 2, 3, 4, 5, 6, 7];
const newItem = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((acc, num) => acc + num, 0);
console.log(newItem);
