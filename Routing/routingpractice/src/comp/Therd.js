import React from 'react'

const Therd = (props) => {
    return (
    <div>
        <h2 style={{ background : props.bcolor, color: props.color , width : "100%" , height: "100px" , display:'flex' , justifyContent:'center' , marginTop:'50px'}}>
            you entered word : {props.str} </h2>
    </div>
    )
}

export default Therd
