import { Point } from "./point";

const point = new Point(24, 50)  // 对象object，实例instance
// point.setX(10);
// console.log(point.getX())
// point.x = 30;
// point.y = 5;

//懒人调用getter 
point.X = 10;
console.log(point.X)
point.Y = 100;
point.drawPoint()


// public, private, protected

// 对象object，类class，实例instance？

// 代码要满足高内聚，低耦合性


