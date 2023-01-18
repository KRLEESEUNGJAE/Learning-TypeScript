{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'Sj';
  const address: Text = 'ulsan';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'seungjae',
    age: 30,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let sjName: Name;
  sjName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type bool = true;
  const isReal: bool = true;
}
