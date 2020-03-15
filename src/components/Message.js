import React , {useState,useEffect} from 'react';

const Message = () => {
    const [message, newMessage] = useState("What's happening this week?");
     
    useEffect(()=>{
        setTimeout (()=>{
            newMessage("I only know it's gon be lit!");
        },5000);
    },[]);

    return (
        <div style={{marginBottom:"50px"}}>
            <h2>Challenge 4</h2>
            <p>Status: {message}</p>
        </div>
    );

};
export default Message;