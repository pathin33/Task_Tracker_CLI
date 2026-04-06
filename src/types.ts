//file định nghĩa các type

interface Task {
    id : number;
    description : string;
    status : "to-do" | "in-progress" |"done";
    createdAt : Date;
    updateAt : Date;
}
export default Task;