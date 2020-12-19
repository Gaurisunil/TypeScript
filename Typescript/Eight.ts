class Circle {  Radius:number;  Pi:number;
   constructor(value:number)  {    this.Radius=value;    this.Pi=3.14;  } 
   Area()  {    return this.Pi*this.Radius*this.Radius;  } }
 
 
//// Q.3
 class CircleX extends Circle {  Circumference()  {    return 2*(this.Pi)*(this.Radius);  } } var objx1 = new CircleX(10); var objx2 = new CircleX(15);
 var ret = objx1.Area(); console.log("Area is "+ret);
 var ret = objx1.Circumference(); console.log("Circumference is "+ret);
 
 
var ret = objx2.Area(); console.log("Area is "+ret);
 var ret = objx2.Circumference(); console.log("Circumference is "+ret);