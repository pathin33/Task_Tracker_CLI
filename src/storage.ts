import fs from 'fs'
import Task from './types'

//ghi file
export function writeFileJSON(nameFile: string, task: Task[]) {
    try {
        const jsonString = JSON.stringify(task, null, 2);
        // Chuyển Object thành string

        fs.writeFileSync(nameFile, jsonString, 'utf-8');
        // Ghi dữ liệu vào file

    } catch (error) {
        throw new Error(`file not found: ${error}`)
    }
}
//đọc file
export function readFileJSON(nameFile:string):Task[]{
        try {
            const data = fs.readFileSync(nameFile,'utf8')

            const dataTask  = JSON.parse(data)
            // Chuyển string thành Object
            return dataTask;
    } catch (error) {
        throw new Error(`file not found: ${error}`)
    }
}
