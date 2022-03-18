import React from 'react';


const Button = (props) => {

function onClick() {
    
}

    return (
        <div>
             <button onClick={onClick} style={{backgroundColor: props.color}} className='btn'>{props.text}</button>
        </div>
    )
}

export default Button;