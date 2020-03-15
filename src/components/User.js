import React , {useState} from "react";

const User = () => {
    const [activeUser,changeUser] = useState("Mehmet");
    const newName = () => changeUser("Bilgil");

    return (
        <div style={{marginBottom:"50px"}}>
            <h2>Challenge 2 </h2>
            <p>Active User is : {activeUser}</p>
            <button onClick={newName}>Change Name !</button>
        </div>
    )
};

export default User;