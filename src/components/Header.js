import React from "react";
import Button from "./Button.js"

const Header = (props) => {

    
    return (
        <header className="header">
            <h1>{props.title}</h1>
           <Button color="green" text='Add Task'/>
        </header>
    )
}

export default Header;