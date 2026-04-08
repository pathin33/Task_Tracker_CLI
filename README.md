# Task Tracker CLI
Tracklance is a command-line tool for managing tasks. It allows you to add, update, delete, and track the status of your tasks efficiently.
## Features  

✅ Add, update, and delete tasks  
✅ Mark tasks as **in-progress** or **done**  
✅ List all tasks or filter by status  
✅ Stores tasks in a JSON file (`data.json`)  

## Installation  

### 1. Clone the Repository  

```bash
git clone https://github.com/pathin33/Task_Tracker_CLI.git
cd Task-tracker
```

### 2. Install Development Dependencies (Optional - For Development)

```bash
npm install --save-dev
```


## Usage  

### Adding a Task  

```bash
tsx ./task-cli.ts add "Buy groceries"
```

### Updating a Task  

```bash
tsx ./task-cli.ts update 874108 "Buy groceries and cook dinner"
```

### Deleting a Task  

```bash
tsx ./task-cli.ts delete 874108
```

### Marking a Task as In-Progress  

```bash
tsx ./task-cli.ts mark-in-progress 436882
```

### Marking a Task as Done  

```bash
tsx ./task-cli.ts mark-done 436882
```

### Listing Tasks  

```bash
tsx ./task-cli.ts list         # All tasks  
tsx ./task-cli.ts list done    # Completed tasks  
tsx ./task-cli.ts list todo    # Pending tasks  
tsx ./task-cli.ts list in-progress # Tasks in progress  
```
