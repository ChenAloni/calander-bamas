import { Task } from "./savedDate";

interface IManager{
    taskList:Task[];
}
export class TaskManager implements IManager{
    public taskList!: Task[];
    returnAllTasks():Task[]
    {
        return this.taskList;
    }
    addTask(newTask:Task)
    {
        this.taskList.push(newTask);
    }
    happendToday()
    {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        this.taskList.forEach(element => {
           if(element.dayDate.toString() == time)
           {
                console.log(element);
           } 
        });
    }
    deletePast()
    {
        const today = new Date();
        for(let i = 0; i<this.taskList.length;i++)
        {
            if(this.taskList[i].dayDate.getDate() < today.getDate())
            {

                this.taskList.splice(i, 0); 
            }
        }        
    }
}