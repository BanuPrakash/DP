
CoordinateSystem = {
    POLAR: 0,
    CARTESIAN: 1
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y= y;
    }
    // constructor(a,b, cs = CoordinateSystem.CARTESIAN) {
    //     if(cs == CoordinateSystem.POLAR) {
    //         this.x = a;
    //         this.y = b;
    //     } else if(cs == CoordinateSystem.CARTESIAN) {
    //         this.x = a * Math.sin(b);
    //         this.y = b * Math.cos(b);
    //     }
    // }
}

class PointFactory {
    static createPolarPoint(x, y) {
        return new Point(x,y);
    }
    static createCartesianPoint(x, y) {
        return new Point(x * Math.sin(y),y * Math.sin(y));
    }
}

let point = PointFactory.createPolarPoint(4,5);