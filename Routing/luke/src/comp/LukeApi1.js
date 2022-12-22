import React from 'react'
import axios from 'axios'
import { useEffect, useState  }  from 'react'
import {Link, navigate} from '@reach/router'

const LukeApi1 = () => {
    const [id,setId]=useState("");
    const [op,setOp]=useState("people");


    const handleSelect=(e)=>{
        setOp(e.target.value)
    } ;

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/" +op+"/"+id)  //just link
    }
    
    return (
    <div>
        <form  onSubmit={handleSubmit} >
    <label>select categore :</label>
<select onChange={handleSelect} >
    <option  selected='select' >select an option </option>
    <option  value="people"   >people</option>
    <option  value="planets"  >planets</option>
    <option  value="starships">Star ships</option>
</select>

<label> ID: </label>
<input type="number" />
<button>search</button>
        </form>
    </div>
    )
}

export default LukeApi1
