import React, { useState } from 'react';
import './App.css';
import InputString from './Components/InputString';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTasks([...tasks, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">ToDo List</span>
      <InputString todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
    );
};

export default App;
