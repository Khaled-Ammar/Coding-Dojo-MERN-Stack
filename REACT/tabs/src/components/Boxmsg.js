import React, { useState } from  'react';
// rafce
const Boxmsg = (props) => {
    
// const arr= [{label : "tab1" , content : "tab 1 content"} , {label : "tab2" , content : "tab 2 content" }, {label : "tab3" , content : "tab 3 content"}];
const [disp , setDisp]= useState("");

    const fun1 = (e,x)=>{
        setDisp (x.content)
    }
    return(
    <>
<div style={{display : 'flex' , justifyContent : 'center' }}>
            {props.arr.map ((item,idx) =><div style={{margin : '20px', border :'1px solid black' , width : '100px'}} key={idx} onClick = { e=> fun1(e,item)}> {item.label}</div>)} 
            </div>

        <p style={{ width : '500px' , height : '400px' , border : '1px solid black' , margin : ' 0 auto'}}> {disp}</p>
</>
    );
};
    
export default Boxmsg;