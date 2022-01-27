function one(x:number, y:number)
{
    if(y == 0)
    {
        throw "attempted to divide a number by zero. Try again.";

    }
    return x/y;
}
function _main_()
{
    const input = process.argv;
    try{
        console.log(one(parseInt(input[2]), parseInt(input[3])));
    }
    catch(err)
    {
        console.log(`there was an Error: ${err}`);
    }
    
    
}
_main_();