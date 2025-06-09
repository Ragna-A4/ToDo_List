import React from "react"
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputString = ({ todo, setTodo, handleAdd}: Props) => {
    return (
        <form className='input' onSubmit={handleAdd}>
            <input type='input' 
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
            placeholder="enter a task" 
            className='input__box' />
            <button type ='submit' className="input__submit">
                add
            </button>
        </form>
    );
};
export default InputString;