import React from "react";
import "./TasksList.css";
import { Todo } from "../../model";
import Task from "./Task/Task";

interface Props{
    tasks: Todo[];
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TasksList: React.FC<Props> = ({tasks, setTasks}: Props) => {
    return <div className="tasks">
        {tasks.map((todo) => (
            <Task 
            todo={todo} 
            key={todo.id} 
            tasks={tasks}
            setTasks={setTasks}
            />
        ))}

    </div>
}

export default TasksList;