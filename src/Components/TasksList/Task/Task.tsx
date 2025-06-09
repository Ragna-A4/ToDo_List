import React from "react";
import "./Task.css";
import { Todo } from "../../../model";
import { MdEdit, MdDelete, MdDone } from "react-icons/md";

type Props = {
    todo: Todo;
    tasks: Todo[];
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const EditIcon = MdEdit as React.FC;
const DeleteIcon = MdDelete as React.FC;
const DoneIcon = MdDone as React.FC;

const Task = ({ todo, tasks, setTasks }:Props) => {
    return <form className="task">
        <span className="task-tekst">
            {todo.todo}
        </span>
        <div>
            <span className="task-icon">
                <EditIcon />
            </span>
            <span className="task-icon">
                <DeleteIcon />
            </span>
            <span className="task-icon">
                <DoneIcon />
            </span>
        </div>

    </form>
}

export default Task;