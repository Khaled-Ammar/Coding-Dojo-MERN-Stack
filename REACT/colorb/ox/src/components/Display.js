import React, { useState } from 'react'

const Displays = (props) => {
    const [color,setColor]=useState("");
    const [box,setBox]=useState([]);


    const sumbitHandle = (e)=>{
        e.preventDefault()
        setColor(color)
        setBox((box)=>[color ,...box])
    }
    const styles= {
        display: 'flex',
        justifyContent: 'space-evenly',

    }
  return (
    
    <div>

      <form onSubmit={sumbitHandle}>
        <label>Enter The Color</label>
        <input
                    onChange={(e) => (setColor(e.target.value))}
                ></input>
        <input type="submit" value="Add" />
      </form>
      <br></br>
      <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
      {box.map((item, i) =>
                <div >
                    <div style={{
                        width: `100px`,
                        height: `100px`,
                        border: '2px solid black',
                        backgroundColor: `${item}`,
                        justifyContent: 'center',
                        marginTop: '20px',
                    }} key={i}>{item}
                    </div>
                   

                 
                              </div>
                              )}
    </div>
    </div>
  )
}

export default Displays
