let 이름: string = "seo";

let newArray: { name: string } = { name: "123" };

//유니온 타입이라고 하는데 숫자와 문자열 둘다 되는것
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
