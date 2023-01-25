{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT = 7; // class level : static을 사용하면 인스턴스가 생성될 때마다 중복으로 데이터가 생성되는 것을 방지할 수 있다.
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMaker = new CoffeeMachine(77);
  console.log(coffeeMaker);
  console.log(coffeeMaker.makeCoffee(7));

  const classLevelCoffeeMachine = CoffeeMachine.makeMachine(88);
  console.log(classLevelCoffeeMachine.makeCoffee(2));
}
