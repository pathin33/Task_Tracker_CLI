import Task from './types';
import { readFileJSON, writeFileJSON } from "./storage";

export function addTask(firstParam: string, nameFile: string) {
    const oldTask: Task[] = readFileJSON(nameFile);
    const newTask: Task = {
        id: Math.floor(Math.random() * 1000000),
        //ramdom số id ngẫu nhiêu
        description: firstParam,
        status: "todo",
        createdAt: new Date(),
        updateAt: new Date()

    }
    const data = oldTask.concat(newTask);
    writeFileJSON(nameFile, data);
}

export function updateTask(secondParam: string, firstParam: number, nameFile: string) {
    const oldTask: Task[] = readFileJSON(nameFile);
    const updateTask = oldTask.find(task => task.id === Number(firstParam));
    if (updateTask !== undefined) {
        if (secondParam.length !== 0) {
            updateTask.description = secondParam
            updateTask.updateAt = new Date()
            writeFileJSON(nameFile, oldTask);
        }
        else {
            console.log("Công việc thay đổi không được để trống");

        }
    }

}

export function deleteTask(firstParam: number, nameFile: string) {
    const oldTask: Task[] = readFileJSON(nameFile);
    const deleteTask = oldTask.filter(task => task.id !== Number(firstParam))
    // lọc ra các mảng có id khác id xóa
    writeFileJSON(nameFile, deleteTask)
}

export function listTask(nameFile: string, firstParam: string) {
    const allTask: Task[] = readFileJSON(nameFile);
    if (firstParam === "todo") {
        allTask.forEach((task, index) => {
            if (task.status === "todo") {
                console.log(`Id: ${task.id} | Công việc thứ ${index + 1} : ${task.description} (${task.status})`);
            }
        });
    }
    else if (firstParam === "done") {
        allTask.forEach((task, index) => {
            if (task.status === "done") {
                console.log(`Id: ${task.id} | Công việc thứ ${index + 1} : ${task.description} (${task.status})`);
            }
        });
    }
    else if (firstParam === "in-progress") {
        allTask.forEach((task, index) => {
            if (task.status === "in-progress") {
                console.log(`Id: ${task.id} | Công việc thứ ${index + 1} : ${task.description} (${task.status})`);
            }
        });
    }
    else if (firstParam === "") {
        allTask.forEach((task, index) => {
            console.log(`Id: ${task.id} | Công việc thứ ${index + 1} : ${task.description} (${task.status})`);
        })
    }
    else {
        console.log("Cú pháp không lệ!");
    }
}

export function statusMark(nameFile: string, firstParam: number, action: string) {
    const allTask: Task[] = readFileJSON(nameFile);
    const task = allTask.find(item => item.id === firstParam);
    if (task) {
        if (action === "mark-done") {
            task.status = "done";
            task.updateAt = new Date();
            writeFileJSON(nameFile, allTask);
        }
        else if (action === "mark-in-progress") {
            task.status = "in-progress";
            task.updateAt = new Date();
            writeFileJSON(nameFile, allTask);
        }
    }
    else {
        console.log("ID không hợp lệ");
    }
}
