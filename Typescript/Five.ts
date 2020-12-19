function DisplayFactor(No1:any):any{
    for(var x=1;x<=No1;x++)
    {
        if((No1%x)==0)
        {
            console.log("%d",x);

        }
    }
}
    console.log(DisplayFactor(20));
