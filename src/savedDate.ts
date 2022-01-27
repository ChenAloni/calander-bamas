const readline = require("readline");
interface IDate
{
    name:string;
    place:string;
    dayDate:Date; 
    startHoure:number;
}
export class Task implements IDate{
    public name!: string;
    public place!: string;
    public dayDate!: Date;
    public startHoure!: number;
    contractor(name:string, place:string, dayDate:Date,  startHoure:number): void
        {
            this.name = name;
            this.place = place;
            this.dayDate = dayDate;
            this.startHoure = startHoure;
        }
} 

function validationName(nameOrPlace:string):string
{
    let nameToReturn:string = "temp";
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        });
    //name
    const readName = () => {
        return new Promise((r) => {
            rl.question(`Please enter the task ${nameOrPlace}: `, (answer:string) => {
            nameToReturn = answer;
            if(nameToReturn.length<=1)
            {
                throw "not enough letters";
            }                        
            rl.close();
            });
        });
        };
        readName().then((name) => {
        console.log(`your name is: ${name}`);
        return name;
        });
    return nameToReturn;
}
function validationDate():Task
{
    let dateToReturn:Task = new Task()
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        });
        const readDate = () => {
        return new Promise((r) => {
            rl.question("Please enter the task date: ", (answer:Task) => {
            dateToReturn = answer;
            if (Object.prototype.toString.call(dateToReturn) !== "[object Date]") {
                throw new SyntaxError;
            }
            rl.close();
            });
        });
        };
        readDate().then((dateToReturn) => {
        console.log(`Sum: ${dateToReturn}`);
        return dateToReturn;
        });
    return dateToReturn
}
/*add date format validation and taskhour validation */
