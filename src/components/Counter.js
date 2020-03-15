import React , {useState} from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

    return(

        <div style={{marginBottom:"50px"}}>
            <h2>Challenge 1</h2>
            <p> Count is: {count} </p>
            <button onClick={() => setCount(count+1)}>Increase Count !</button>
        </div>
    )
};

export default Counter;