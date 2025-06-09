import React from "react";
import "./TasksList.css";
import { Todo } from "../../model";

interface Props{
    tasks: Todo[];
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TasksList: React.FC<Props> = ({tasks, setTasks}: Props) => {
    return <div className="tasks">
        {tasks.map(todo => (
            <li>{todo.todo}</li>
        ))}

    </div>
}

export default TasksList;