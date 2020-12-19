class Arithmatic {  number1:number;  number2:number;  result:number;
    constructor(value1:number, value2:number)   {      this.number1=value1;     this.number2=value2;   }  
    Addition()  {    return this.number1+this.number2;  }
    Substraction()  {    return this.number1-this.number2;  }
    Multiplication()  {    return this.number1*this.number2;  }
    Division()  {    return this.number1/this.number2;  } }
  var obj1 = new Arithmatic(15,10); var obj2 = new Arithmatic(50,20);
  var ret = obj1.Addition(); console.log("Addition is "+ret);
  var ret = obj1.Substraction(); console.log("Substraction is "+ret);
  var ret = obj1.Multiplication(); console.log("Multiplication is "+ret);
  var ret = obj1.Division(); console.log("Division is "+ret);
  var ret = obj2.Addition(); console.log("Addition is "+ret);
  var ret = obj2.Substraction(); console.log("Substraction is "+ret);
  var ret = obj2.Multiplication(); console.log("Multiplication is "+ret);
  var ret = obj2.Division(); console.log("Division is "+ret);
  