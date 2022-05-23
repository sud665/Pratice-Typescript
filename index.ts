//문자열
let 이름: string = "seo";
//넘버
let 나이: number = 33;
//참거짓
let 기혼: boolean = true;

//문자만 담은 배열
let members: string[] = ["kim", "park"];

//객체도 타입 지정 가능
let membersObject: { name: string; age: number } = { name: "seo", age: 18 };

let musicList: { title: string; name: string } = {
  title: "dreams come true",
  name: "asepa",
};

let newArray: { name: string } = { name: "123" };

//유니온 타입이라고 하는데 숫자와 문자열 둘다 되는것 타입 2개 이상 합친 데이터
let two: string | number = 123;

let arr: string[] = ["12", "123", "123"];

//타입을 변수처럼 사용도 가능하다. 대문자로 작성한다.

type Name = string | number;

let newName: Name = "킴";

// 함수도 타입지정이 가능하다. 매개변수와 출력값에 타입을 지정한다.

function 함수(x: number): number {
  return x * 2;
}

console.log(함수(2));

// 배열 객체의 유니온 타입 지정 방법;

let people: (number | string)[] = [1, "2", 3];

let 객체: { a: string | number } = { a: 123 };

// any타입 쉴드를 해제 시키는거라 그렇다면 왜 타입스크립트 쓰는것이냐~~

let 아무거나: any;
아무거나 = 123;

// 에니보단 안전함 변수는 못들어감
let 아무거나2: unknown;

//타입스크립트는 간단한 수학연산도 타입이 맞아야함

let user: string = "kim";
let age: undefined = undefined;
let married: boolean = false;
let 철수: (string | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// 함수 매개변수에 아무것도 지정안하면 any 타입임
// 매개변수에 지정하고 출력값에서도 타입을 지정해야함
// 함수에 타입 지정하는 방법 void 타입
// void는 리턴값을 주고 싶지 않을때 사용한다.
function duble(x: number): number {
  return x * 2;
}

duble(2);

function triple(x?: number): void {
  console.log(x + 3);
}

duble(2);

//함수에 파라미터가 선언되어 있으면 꼭 넣어야 한다.
// 넣어도 되고 안넣어도 되게 하려면 ? 넣어야 한다.
// undefinded 넣는거랑 같다
triple();

function callName(x?: string): void {
  if (x) {
    console.log("안녕하세요" + x);
  } else {
    console.log("이름이 없습니다.");
  }
}

callName();

//문자 길이는 toString()을 같이 사용해라 number타입도 해줌

function word(x: string | number): number {
  let result = x.toString().length;

  return result;
}

function possible(
  income: number,
  house: boolean,
  score: string
): string | void {
  let result: number = 0;

  result += income;

  if (house === true) {
    result += 500;
  }
  if (score === "상") {
    result += 100;
  }
  if (result >= 500) {
    return "결혼가능";
  }
}

console.log(possible(100, true, "상"));

//type이 하나로 확정 되어 있지 않을땐 Narrowing를 사용해야함
//typeof 연산자로 타입을 걸러보자

function 모름함수(x: number | string) {
  let array: number[] = [];

  if (typeof x === "number") {
    array[0] = x;
  }
}

//Narrowing 의 주의점 else문을 적어줘야 할 수도 있음
// 속성명 in object 자료
// 인스턴스 instanceof 부모

//Narrowing 말고 다른 방법

//assertion 문법 용도
//1.Narrowing 할때 사용함 (타입을 변경시켜주는것이 아님)
//2.어떤 타입이 들어오는지 알 수 있을때
//3.왜 에러나는지 모를때 디버깅용으로 사용할것

function 모름함수2(x: number | string) {
  let array: number[] = [];

  array[0] = x as number;
}

//타입이 반복해서 많이 쓰일때 type alias 사용
type Animal = string | number | undefined;

let 동물: Animal = "asd";

type Animal2 = { name: string; age: number };

let 동물2: Animal2 = { name: "kim", age: 20 };

//재할당 금지 키워드 const
const 출생지역 = "seoul";

// 객체의 값은 변화 가능 객체는 래퍼런스타입이라 주소값을 이용하기 때문에
const 출생객체 = { region: "seoul" };

출생객체.region = "busan";

// readonly 읽기전용 키워드 값이 변경되지 않는다;(사실 변경된다. 에디터에서 보여주는 경고사항)
type Girlfriend = {
  readonly name: string;
};

const 여친: Girlfriend = {
  name: "엠버",
};
// 여친.name = '유라'

// 두 타입을 합치는 방법
// extend한다 & 기호 합치는
// 타입은 재정의는 되지 않는다.
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

//연습문제
type MyType = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 테스트객체: MyType = {
  color: "blue",
  size: 1234,
  position: [123, 123, 1233],
};

//유저정보
type UserInfo = {
  name: string;
  phone: number;
  email: string;
};

type Adult = { adult: boolean };

type NewType1 = UserInfo & Adult;

let userinfo: NewType1 = {
  name: "kim",
  phone: 1020203222,
  email: "asdasd-12313",
  adult: false,
};

//넘버타입은 010으로 시작하는 것은 판별 못함
//이유는 ECMAScript 5 이상을 대상으로 하는 경우 8진수 리터럴을 사용할 수 없습니다. '0o1020203222' 구문을 사용하세요.

// Literal Types cosnt 변수 유사품 사용

// 좀 더 엄격한 타입 지정가능
// 타입대신 값을 선언한다. 자동완성기능도 쉬워서 사용한다.

function rockssisorpaper(
  a: "가위" | "바위" | "보"
): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

//literal type의 문제점 해결 as const

let data = {
  name: "kim",
} as const;

function checkfunc(a: "kim") {}

checkfunc(data.name);

// 함수에 type alias를 적용하려면 함수표현식으로 써야함 한다

type 함수타입 = (a: string) => number;

let 특수함수: 함수타입 = function () {
  return 10;
};

// 객체 안에 함수도 만들수 있음
