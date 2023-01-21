{
  /**
   * Enum
   */

  //? JavaScript: js는 enum을 따로 지원하지 않는다
  //? Object.freeze를 이용해서 enum과 비슷하게 구현 할 수 있다.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //! TypeScript: 타입스크립트의 enum은 지양하는 것이 좋다. => 타입이 정확하게 보장되지 않음.
  enum Days { // enum의 변수명은 맨 앞 글자만 대문자로 쓴다.
    MONDAY = 1, // 미지정 시: 0
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY = 'Yes~', // 문자도 할당 가능, but 하나하나 직접 할당해야 함.
  }
  console.log(Days.FRIDAY);
  console.log(Days.SUNDAY);

  //* enum 대신에 union 타입을 사용하는 것이 더 좋다.
  //* 대부분의 경우 union 타입으로 대체 가능하다(웹에 한정).
  type BetterDays = 'MONDAY' | 'THURSDAY' | 'WEDNESDAY';
  let betterDay: BetterDays = 'WEDNESDAY';
  // betterDay = 'apple';  //! 에러 발생: 유니언 타입은 지정한 문자열 중 하나만 사용 가능!
}
