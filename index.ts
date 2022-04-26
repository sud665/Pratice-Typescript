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
