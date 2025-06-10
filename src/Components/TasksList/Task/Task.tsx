import React, { useEffect, useState, useRef} from "react";
import "./Task.css";
import { Todo } from "../../../model";
import { MdEdit, MdDelete, MdDone } from "react-icons/md";

const EditIcon = MdEdit as React.FC;
const DeleteIcon = MdDelete as React.FC;
const DoneIcon = MdDone as React.FC;

const Task: React.FC<{
    todo: Todo;
    tasks: Todo[];
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, tasks, setTasks }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();
        setTasks(
            tasks.map((todo)=> (todo.id === id ? { ...todo, todo: editTask} : todo))
        );
        setEdit(false);
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter((todo) => todo.id !== id));
    };

    const handleDone = (id: number) => {
        setTasks(tasks.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo
           )
        );
    };

    return <form className="task"
                 onSubmit={(e) => handleEdit(e, todo.id)}
           >
            {edit ? (
                <input
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                ref={inputRef}
                className="task-edit-input"
                />
            ) : todo.isDone ? (
        <s className={`${todo.isDone ? "task-text task-text_done" : "task-text"}`}>
            {todo.todo} </s>
            ):(<span className={`${todo.isDone ? "task-text task-text_done" : "task-text"}`}>
            {todo.todo} </span>
            )}
        <div>
            <span className="task-icon" onClick={() => {
            if (!edit && !todo.isDone){setEdit(!edit);

            }
            }}>
                <EditIcon />
            </span>
            <span className="task-icon" onClick={() => handleDelete(todo.id)}>
                <DeleteIcon />
            </span>
            <span className="task-icon" onClick={() => handleDone(todo.id)}>
                <DoneIcon />
            </span>
        </div>

    </form>
}

export default Task;