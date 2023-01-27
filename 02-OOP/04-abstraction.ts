{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //* 접근 제한자
  // public(외부에서 접근 가능): 명시하지 않을 경우 default값이 public
  // private(외부에서 접근 불가능)
  // protected(외부에서 접근 불가능, 상속받은 자식 클래스에서만 접근 가능)

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // class level : static을 사용하면 인스턴스가 생성될 때마다 중복으로 데이터가 생성되는 것을 방지할 수 있다.
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
      console.log('filled~!');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up ~ 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean(): void {
      console.log('cleaning the machine');
    }
  }

  class AmateurBarista {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillBeans(77);
      this.machine.clean();
    }
  }

  const coffeeMaker: CoffeeMachine = CoffeeMachine.makeMachine(77);
  const amateur = new AmateurBarista(coffeeMaker);
  const pro = new ProBarista(coffeeMaker);
  amateur.makeCoffee();
  pro.makeCoffee();
}

/**
 * Point!
 * 동일한 object의 인스턴스일지라도
 * 이 object는 두가지의 인터페이스를 구현하기 때문에
 * amateur와 pro는 CoffeeMaker와 CommercialCoffeeMaker를 생성자에서 받아오며
 * 각각의 interface에서 규약된 함수만 접근이 가능하다는 것을 알 수 있다.
 *
 * 그러므로
 * interface가 어떻게 구현되어있는지 얼마나 많은 함수가 있는지 신경쓰지 않고
 * interface에 규약된 함수들만 이용해서 생성된 object와 의사소통을 할 수 있다.
 *
 * 1. private은 접근 제어를 통해 내부의 정보를 은닉화
 * 2. interface를 통해 추상화
 */
