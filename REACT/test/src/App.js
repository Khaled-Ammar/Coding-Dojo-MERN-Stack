import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Addtodo from './comp/Addtodo';
import Display from './comp/Display';
import React from 'react';


function App() {
  const [todos,setTodos]=useState([])
// -----------------------creat
const fun1 =(todo)=>{
setTodos([...todos,todo])
}
// ------------------------------------

// ----------------------------------------delete
const deleteTask = (id)=>{
  setTodos(todos.filter((todo,i)=>id!=id));
}


// --------------------------------------------------
// --------------------------------------------updateTask,,chekbox
const updateTask=(id)=>{
const tasktoupdate= todos.filter((todo,i)=>i==id);
tasktoupdate[0].completed=!tasktoupdate[0].completed;
setTodos([...todos])
}
// -------------------------------------------
  return (
    <div className="App">
    <Addtodo  todos={todos} myfun= {fun1}/>
    <Display todos={todos}  deleteTask={deleteTask} updateTask={updateTask} />
  
    </div>
  );
}

export default App;
