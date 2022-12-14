import React from "react";
import { useState } from "react";

const Addtodo =(props)=>{
    const [todo ,setTodo]= useState({});
    
    const fun1 =(e)=>{
        setTodo({
            // id:props.todos.length,
            text:e.target.value,
            completed:false ,

        })
    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        props.myfun(todo);
    }

    return(
        <div>
<form onSubmit ={handelSubmit}>
    <input type ="text" onChange={  fun1  }  />
    <input type = "submit" value="Add" />

</form>
            
        </div>
    )
        
}


export default Addtodo ;