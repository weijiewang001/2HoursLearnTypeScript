// Generics 泛型

// let list12: number[] = [1,2,3,4]
// let list22: Array<string> = [1,2,3,4]

// Array<T> === T[]
let lastInArray = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}

const l1 = lastInArray([1,2,3,4]);
const l2 = lastInArray<string>(["a", "b", "c"]);
const l3 = lastInArray<string | number>(["a", "b", "c"]);


let makeTuple = <T, Y = number>(x: T, y: Y) => [x, y]

const v1 = makeTuple(1, "one");
const v2 = makeTuple<boolean>(true, 1);