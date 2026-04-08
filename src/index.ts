import Commands from "./enum";
import {
    addTask,
    deleteTask,
    updateTask,
    listTask,
    statusMark
} from './taskLogic'

const FILE = './data.json';
function performActions(action: string, firstParam: string, secondParam: string) {
    switch (action) {
        case Commands.Add:
            if (firstParam !== "done" && firstParam !== "in-progress" && firstParam !== "todo") {
                addTask(firstParam, FILE);
                console.log("Thêm công việc thành công");
            }
            break;

        case Commands.Delete:
            const idDelete = Number(firstParam);
            if (!isNaN(idDelete)) {
                deleteTask(idDelete, FILE);
                console.log("Xóa công việc thành công");
            }
            break;
        case Commands.Update:
            const idUpdate = Number(firstParam);
            if (!isNaN(idUpdate)) {
                updateTask(secondParam, idUpdate, FILE);
                console.log("Cập nhật công việc thành công");
            }
            break;
        case Commands.MarkInProgress:
            const idInprogress = Number(firstParam);
            if (!isNaN(idInprogress)) {
                statusMark(FILE, idInprogress, action);
                console.log("Đã đổi trạng thái công việc sang đang thực hiện")
            }
            break;
        case Commands.MarkDone:
            const idDone = Number(firstParam);
            if (!isNaN(idDone)) {
                statusMark(FILE, idDone, action);
                console.log("Đã đổi trạng thái công việc sang đã hoàn thành")
            }
            break;
        case Commands.List:
            listTask(FILE,firstParam);
            break;
        case Commands.ListTodo:
            listTask(FILE,firstParam);
            break;
        case Commands.ListDone:
            listTask(FILE,firstParam);
            break;
        case Commands.ListInProgress:
            listTask(FILE,firstParam);
            break;
        default:
            break;
    }
}

export default performActions