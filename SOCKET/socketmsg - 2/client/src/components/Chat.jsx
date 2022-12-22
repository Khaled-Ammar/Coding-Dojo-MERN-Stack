import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));
    const [txt,setTxt]=useState("");
    const [messages,setMessages]=useState([]);


    useEffect(() => {
        socket.on('Welcome', data => console.log(data));
        socket.on('chat', data => setMessages([...messages,data]));
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        socket.emit("chat",txt)
    }
    return (
    <div>
        {messages.map((msg,i)=><p key={i} >{msg}</p>)}
        <form onSubmit={handleSubmit}>
<input type="text" onChange={e=>setTxt (e.target.value)} />
<input type="submit" value="send" />
        </form>
    </div>
    )
}

export default Chat;