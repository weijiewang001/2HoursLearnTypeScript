interface IPoint {
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
  X: number;
  Y: number;
  // getX: () => number
  // getY: () => number
  // setX: (value) => void
  // setY: (value) => void
}

export class Point implements IPoint {
  // x: number;
  // y: number;

  //  Access Modifier 访问修饰符： public
  constructor(private x:number, private y: number = 2) {
    // this.x = x;
    // this.y = y;
  }


  drawPoint = () => {
    console.log("x: ", this.x, " y: ", this.y);
  };
  getDistances = (p: IPoint) => {
    return Math.pow(p.X-this.x, 2) + Math.pow(p.Y-this.y, 2)
  }
  
  
  // setter懒人写法 
  set X(value: number) {
    if(value < 0){
      throw new Error("Value不能小于0")
    }
    this.x = value;
  }
  // getter懒人调用
  get X() {
    return this.x;
  }

  set Y(value: number) {
    if(value < 0){
      throw new Error("Value不能小于0")
    }
    this.y = value;
  }

  get Y() {
    return this.y;
  }
}