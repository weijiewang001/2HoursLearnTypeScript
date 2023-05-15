"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    // x: number;
    // y: number;
    //  Access Modifier 访问修饰符： public
    function Point(x, y) {
        if (y === void 0) { y = 2; }
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log("x: ", _this.x, " y: ", _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.X - _this.x, 2) + Math.pow(p.Y - _this.y, 2);
        };
        // this.x = x;
        // this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        // getter懒人调用
        get: function () {
            return this.x;
        },
        // setter懒人写法 
        set: function (value) {
            if (value < 0) {
                throw new Error("Value不能小于0");
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value不能小于0");
            }
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
