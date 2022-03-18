import React from 'react';


const Button = (props) => {

    const {onAdd} = props;

    return (
        <div>
             <button onClick={onAdd} style={{backgroundColor: props.color}} className='btn'>{props.text}</button>
        </div>
    )
}

export default Button;