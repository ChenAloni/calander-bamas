const readline = require("readline");
async function read()
{
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    const sum = (...numbers:any) => numbers.reduce((s:any, i:any) => s+=i,0)
    const readNumbers = () => {
    return new Promise((r) => {
        rl.question("Please enter you numbers: ", (answer:any) => {
        const numbers:any[] = answer.split(" ").map((x:any) => +x)
        numbers.forEach((element) => {
            if(isNaN(element))
            {
                throw `invalid input, enter only numbers.`
            }
        });
        r(sum(...numbers));
        rl.close();
        });
    });
    };
    readNumbers().then((sum) => {
    console.log(`Sum: ${sum}`);
    return sum;
    });

}
function main()
{
    try{
        read();
    }
    catch(err)
    {
        console.log(`new Error exepted: ${err}`)
    }
}
main();