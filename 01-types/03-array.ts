{
  // Array
  const fruits: string[] = ['🍎', '🍏'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple: 서로 다른 타입을 담을 수 있다.
  // but -> interface, type alias, class로 대체해서 사용하는 것이 좋다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; //123
  const [name, age] = student;
}
