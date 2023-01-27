{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //* 접근 제한자
  // public(외부에서 접근 가능): 명시하지 않을 경우 default값이 public
  // private(외부에서 접근 불가능)
  // protected(외부에서 접근 불가능, 상속받은 자식 클래스에서만 접근 가능)

  class CoffeeMachine {
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

  // const coffeeMaker = new CoffeeMachine(77); //! invalid
  // coffeeMaker.coffeeBeans = -34; //! invalid
  const coffeeMaker = CoffeeMachine.makeMachine(77);
  coffeeMaker.fillBeans(88);

  class User {
    // private firstName: string;
    // private lastName: string;
    // fullName: string;

    //* getter
    public get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('not a positive number.');
      }
      this.internalAge = num;
    }
    //* 생성자에 접근제어자를 설정하면 선언, 할당 없이도 멤버변수로 설정이 된다.
    constructor(private firstName: string, public lastName: string) {
      // this.firstName = firstName;
      // this.lastName = lastName;
      // this.fullName = `${firstName} ${lastName}`;
    }
  }
  const user = new User('Seungjae', 'Lee');
  console.log(user.fullName);
  // user.firstName = 'Bruce';
  user.age = 6;
  console.log(user.fullName);
}
