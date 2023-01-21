{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function intersection(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  intersection({
    name: 'seungjae',
    score: 100,
    employeeId: 940711,
    work: () => {},
  });
  // intersection 타입은 다양한 타입들을 묶어서 사용할 수 있다.
}
