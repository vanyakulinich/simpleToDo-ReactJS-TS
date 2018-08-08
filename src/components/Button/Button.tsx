import * as React from 'react';
import './style.css'

interface IButtonProps {
    text:string;
    addNewItem: ()=>void;
}


const Button:React.SFC<IButtonProps>=(props: IButtonProps)=>{
    return (
        <button className='customButton' onClick = {props.addNewItem}>{props.text}</button>
    )
}

export default Button;