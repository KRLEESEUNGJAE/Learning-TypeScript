{
  // Array
  const fruits: string[] = ['π', 'π'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple: μλ‘ λ€λ₯Έ νμμ λ΄μ μ μλ€.
  // but -> interface, type alias, classλ‘ λμ²΄ν΄μ μ¬μ©νλ κ²μ΄ μ’λ€.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; //123
  const [name, age] = student;
}
