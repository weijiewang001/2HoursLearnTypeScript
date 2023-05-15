let hello = 'hello world';

// console.log(hello)

// 3-1 变量声明
var number1 = 5;
let number2 = 2;
const numhber3 = 3;


// 3-3: number, string, boolean

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// console.log(add(number1, number2))

let isTrue: boolean = true;

// isTrue = 'true';

let  total: number = 0;
let firstName: string = "wayne"
let str = `My name is  ${firstName}`

//  3-4 Array and Tupple元组
let list1: number[] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4]
let list3 = [1,2,3,4]

let list4 = [1, "ddd"]
let list5: any[] = [1, "dss", true]

// tuple
// tupe是一个固定长度，固定类型的array
// tuple

let person1: [number, string] = [1, "Wayne"]
// person1[0] = "ddd"
// person1[1] = 1
// person1[2] = 111

// tuple bug
person1.push(3)

let person2 = [1, "Wayne"]

person2[0] = "ddd"
person2[1] = 11
person2[2] = 5

// 3-5 联合(Union)与文献(Literal)类型
let union : string | number;
union = 2;
union = "sddd";
// union = true;

let union2 : number | string | boolean | string[]

function merge(
  n1: number | string, 
  n2: number | string, 
  resultType: "as-number" | "as-string"
  ) {
  if( resultType === "as-string"){
    return n1.toString() + n2.toString();
  }
  if (typeof n1 === "string" || typeof n2 ==="string")
   return n1.toString() + n2.toString();
  else return n1 + n2;
}

let mergeNumber = merge(2, 5, "as-number")
let mergeNumber2 = merge(2, 5, "as-string")
let mergeString = merge("hello", "world", "as-string");

console.log(mergeNumber)
console.log(mergeNumber2)
console.log(mergeString)

// 字面量类型 (literal)
let union3: 0 | 1 | 2
union3 = 1;
// union3 = 4;

let literal : 1 | "2" | true | [1,2,3,4]

// 枚举类型 Enum
enum Color {
  red = 5,
  green,
  blue
}

let color = Color.blue
console.log(color)

enum Color2 {
  red = 5,
  green = 10,
  blue = 1,
}

enum Color3 {
  red = "red",
  green = "green",
  blue = 1,
}

let color3 = Color3.green;
console.log(color3)

//  3-7 any和 unknown
let randomValue: unknown = 666;
randomValue = true;
randomValue = "asdge";
randomValue = {};
if(typeof randomValue === 'function'){
  randomValue();
}
if(typeof randomValue === "string"){
  randomValue.toUpperCase();
}

// void, undefined 与 never
function printResult() : undefined {
  console.log('lalala')
  return
}
console.log("hello",printResult())

function throwError(message: string, errorCode: number): never {
  throw {
    message,
    errorCode,
  }
}

throwError("not found", 404);

function whileLoop() {
  while(true) {
    console.log("haha")
  }
}

// 3-9 类型适配 Type Assertions
let message : any;
message = "abc";
message.endsWith("c");

let ddd = (<string>message).endsWith("c")
let ddd1 = (message as string).endsWith("c")


// 3-10 函数类型

let log = function (message) {
  console.log(message);
}

let log2 = (message: string) => console.log(message)

log2("hello")
// log2(2)
// log2(true)

let log3 = (message: string, code: number = 0) => {
  console.log(message,code)
}

log3("hello", 3)
