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
            }
            break;

        case Commands.Delete:
            const idDelete = Number(firstParam);
            if (!isNaN(idDelete)) {
                deleteTask(idDelete, FILE);
                
            }
            break;
        case Commands.Update:
            const idUpdate = Number(firstParam);
            if (!isNaN(idUpdate)) {
                updateTask(secondParam, idUpdate, FILE);
            }
            break;
        case Commands.MarkInProgress:
            const idInprogress = Number(firstParam);
            if (!isNaN(idInprogress)) {
                statusMark(FILE, idInprogress, action);
                
            }
            break;
        case Commands.MarkDone:
            const idDone = Number(firstParam);
            if (!isNaN(idDone)) {
                statusMark(FILE, idDone, action);
                
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