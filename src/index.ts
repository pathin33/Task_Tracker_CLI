import Commands from "./enum";
import {
    addTask,
    deleteTask,
    updateTask,
    listTask
} from './taskLogic'

const FILE = './data.json';
function performActions(action : string , firstParam : string , secondParam: string){
    switch (action) {
        case Commands.Add:
            if(firstParam !== "done" && firstParam !== "in-progress" && firstParam !== "todo"){
                addTask(firstParam,FILE);
                console.log("Thêm công việc thành công");
            }
            break;

        case Commands.Delete:
            const idDelete = Number(firstParam);
            if(!isNaN(idDelete)){
                deleteTask(firstParam,FILE);
                console.log("Xóa công việc thành công");
            }
            break;
        case Commands.Update:
            const idUpdate = Number(firstParam);
            if(!isNaN(idUpdate)){
                updateTask(secondParam,firstParam,FILE);
                console.log("Cập nhật công việc thành công");
            }
            break;
        case Commands.List:
            listTask(FILE);
        default:
            break;
    }
}

export default performActions