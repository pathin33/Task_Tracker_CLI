import Task from './types';
import { readFileJSON, wirteFileJSON } from "./storage"; 

export function addTask(firstParam:string,nameFile:string){
    const oldTask : Task [] = readFileJSON(nameFile);
    const newTask : Task = {
        id : Math.floor(Math.random() * 1000000),
        //ramdom số id ngẫu nhiêu
        description : firstParam,
        status : "todo",
        createdAt : new Date(),
        updateAt : new Date()
        
    }
    const data = oldTask.concat(newTask);
    wirteFileJSON(nameFile,data);
}

export function updateTask(secondParam:string,firstParam:string,nameFile:string){
    const oldTask : Task[] = readFileJSON(nameFile);
    const updateTask  = oldTask.find(task => task.id === Number(firstParam));
    if(updateTask !== undefined){
        updateTask.description = secondParam
        updateTask.updateAt = new Date()
        wirteFileJSON(nameFile,oldTask);
    }

}

export function deleteTask(firstParam:string,nameFile:string){
    const oldTask : Task[] = readFileJSON(nameFile);
    const deleteTask = oldTask.filter(task => task.id !== Number(firstParam))
    // lọc ra các mảng có id khác id xóa
    
    wirteFileJSON(nameFile,deleteTask)
}

export function listTask(nameFile:string){
    const allTask : Task[] = readFileJSON(nameFile);
    allTask.forEach((task,index)=>{
        console.log(`Công việc thứ ${index+1} : ${task.description} | Trạng thái : ${task.status}`)
    })
}
