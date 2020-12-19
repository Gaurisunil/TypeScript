function Area(No1:number):number
{
    console.log("Inside Area");
    var Ans:number=0;
    Ans=3.14*No1*No1;
    return Ans;
}
var result:number=0;
var vals:number=8;
result=Area(vals);
console.log("Multiplication is:"+result);