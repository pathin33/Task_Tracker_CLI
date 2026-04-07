import performActions from './src/index'
const args = process.argv.slice(2);//sẽ chỉ cắt 2 phần tử đầu tiên của mảng
const action = args[0] //hành động thao tác
const firstParam = args[1];    // Mô tả task, hoặc ID, hoặc status (done/todo)
const secondParam = args[2] //Mô tả khi update


performActions(action,firstParam,secondParam)

