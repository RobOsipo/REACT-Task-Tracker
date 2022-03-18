import React from "react";
import Button from "./Button.js"

const Header = (props) => {

    const {title, onAdd} = props;
    
    
    return (
        <header className="header">
            <h1>{title}</h1>
           <Button color="green" text='Add Task' onAdd={onAdd}/>
        </header>
    )
}

export default Header;