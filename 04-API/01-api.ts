Array;
[1, 2].map;

type Student = {
  passed: boolean;
};

const students: Student[] = [{ passed: false }, { passed: true }, { passed: true }];
const result = students.every((student) => student.passed);
console.log(result);

class Animal {}
class Meerkat extends Animal {
  isMeerkat: boolean = true;
}
class RedPanda extends Animal {
  isRedPanda: boolean = false;
}
const animals: Animal[] = [new Meerkat(), new Meerkat(), new RedPanda()];
const every = animals.every<Meerkat>(
  (animal: Animal): animal is Meerkat => (animal as Meerkat).isMeerkat !== undefined
);
