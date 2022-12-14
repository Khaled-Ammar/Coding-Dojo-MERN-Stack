import React from 'react'

const Seco = (props) => {
    return (
    <div>
        {isNaN(props.str)?<h2>you entered word : {props.str} </h2> : <h2>the number is : {props.str}</h2>}
    </div>
    )
}

export default Seco
