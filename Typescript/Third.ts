function Maximum(No1:Number,No2:Number,No3:Number):Number
{
    if((No1>=No2)&&(No1>=No3))
    {
        return No1;

    }
    else if((No2>=No3)&&(No2>=No1))
    {
        return No2;
    }
    else{
        return No3;
    }
}


var result:Number=0;
result=Maximum(23,38,98);
console.log("Maxium is:"+result);