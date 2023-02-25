console.log(this);

function simpleFunc() {
  console.log(this);
}

simpleFunc();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
// const caller = counter.increase.bind(counter); //? function 사용할 경우
caller(); // undefined
/**
 * const, let을 사용해서 변수를 선언하면
 * window에 등록되지 않는다!
 *
 * but, var은 등록됨 => var 사용은 지양하는 것이 좋다.
 */

class Lee {}

const lee = new Lee();
lee.run = counter.increase;
lee.run();
