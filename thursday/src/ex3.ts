var fs = require('fs');
function readTheFile(path:string)
{    
    fs.readFile(path, 'utf8', function(err:any, data:any){                
        if(data === undefined)
        {
            throw "this file is not exist";
        }
        else{
            console.log(data);
        }
        
    });
    
    console.log('readFile called');
}

function main_()
{
    const input = process.argv;
    try{
        const path = process.argv[2];
        console.log(readTheFile(path));
    }
    catch(err)
    {
        console.log(`there was an Error: ${err}`);
    }
}
main_();