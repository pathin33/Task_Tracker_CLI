import Commands from "./enum";
import Task from './types';
import { readFileJSON, wirteFileJSON } from "./storage"; 

export function add(firstParam:string,nameFile:string){
    const oldTask : Task [] = readFileJSON(nameFile)
    const newTask : Task = {
        id : Math.floor(Math.random() * 1000000),
        //ramdom số id ngẫu nhiêu
        description : firstParam,
        status : "to-do",
        createdAt : new Date(),
        updateAt : new Date()
        
    }
    const data = oldTask.concat(newTask)
    wirteFileJSON(nameFile,data)
    console.log("Thêm dữ liệu thành công")
}

export function update(secondParam:string,firstParam:string,nameFile:string){
    const data : Task[] = readFileJSON(nameFile)
    const updateTask  = data.find(task => task.id === Number(firstParam))
    if(updateTask !== undefined){
        updateTask.description = secondParam
        updateTask.updateAt = new Date()
    }
    wirteFileJSON("./data.json",data)

}

update ("Heheh","613790","./data.json")