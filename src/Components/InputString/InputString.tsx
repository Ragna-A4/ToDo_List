import React, { useRef } from "react"
import "./InputString.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputString = ({ todo, setTodo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' 
         onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
         }}>
            <input type='input'
            ref = {inputRef} 
            value={todo}
            onChange={
                (e) => setTodo(e.target.value)
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