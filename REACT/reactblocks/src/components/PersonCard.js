import React from "react";


const PersonCard = (props) => {

    return (
        <div>
            <h1>My name is : {props.firstName}  {props.lastName }</h1>
            <p>my age : {props.age}</p>
            <p> my hair Color : {props.hairColor}</p>
        </div>
  )
  }
;

export default PersonCard;
