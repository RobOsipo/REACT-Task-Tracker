import React from "react";
import Button from "./Button.js"

const Header = (props) => {

    const {title, onAdd, showAdd} = props;
    
    
    return (
        <header className="header">
            <h1>{title}</h1>
           <Button color={showAdd ? "red" : "green"} text={ showAdd ? 'Close Task' : 'Open Task'} onAdd={onAdd}/>
        </header>
    )
}

export default Header;