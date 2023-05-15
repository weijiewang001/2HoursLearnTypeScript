var hello = 'hello world';
// console.log(hello)
// 3-1 变量声明
var number1 = 5;
var number2 = 2;
var numhber3 = 3;
// 3-3: number, string, boolean
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// console.log(add(number1, number2))
var isTrue = true;
// isTrue = 'true';
var total = 0;
var firstName = "wayne";
var str = "My name is  ".concat(firstName);
//  3-4 Array and Tupple元组
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var list3 = [1, 2, 3, 4];
var list4 = [1, "ddd"];
var list5 = [1, "dss", true];
// tuple
// tupe是一个固定长度，固定类型的array
// tuple
var person1 = [1, "Wayne"];
// person1[0] = "ddd"
// person1[1] = 1
// person1[2] = 111
// tuple bug
person1.push(3);
var person2 = [1, "Wayne"];
person2[0] = "ddd";
person2[1] = 11;
person2[2] = 5;
// 3-5 联合(Union)与文献(Literal)类型
var union;
union = 2;
union = "sddd";
// union = true;
var union2;
function merge(n1, n2, resultType) {
    if (resultType === "as-string") {
        return n1.toString() + n2.toString();
    }
    if (typeof n1 === "string" || typeof n2 === "string")
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
var mergeNumber = merge(2, 5, "as-number");
var mergeNumber2 = merge(2, 5, "as-string");
var mergeString = merge("hello", "world", "as-string");
console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
// 字面量类型 (literal)
var union3;
union3 = 1;
// union3 = 4;
var literal;
// 枚举类型 Enum
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
var color = Color.blue;
console.log(color);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 5] = "red";
    Color2[Color2["green"] = 10] = "green";
    Color2[Color2["blue"] = 1] = "blue";
})(Color2 || (Color2 = {}));
var Color3;
(function (Color3) {
    Color3["red"] = "red";
    Color3["green"] = "green";
    Color3[Color3["blue"] = 1] = "blue";
})(Color3 || (Color3 = {}));
var color3 = Color3.green;
console.log(color3);
//  3-7 any和 unknown
var randomValue = 666;
randomValue = true;
randomValue = "asdge";
randomValue = {};
if (typeof randomValue === 'function') {
    randomValue();
}
if (typeof randomValue === "string") {
    randomValue.toUpperCase();
}
// void, undefined 与 never
function printResult() {
    console.log('lalala');
    return;
}
console.log("hello", printResult());
