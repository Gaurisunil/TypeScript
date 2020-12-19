function Maximum(arr):any
{
    var Max:number=arr[0];
    for(var i=0;i<8;i++)
    {
        if(arr[i]>Max)
        {
            Max=arr[i];
        }
    }
    return Max;
}

var returnvalue=Maximum([89,23,6,45,67,34,77])
console.log(returnvalue)