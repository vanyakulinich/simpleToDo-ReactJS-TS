import * as React from 'react';

interface IProps {
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input:React.SFC<IProps> = (props:IProps)=>{
    return <input 
                type="text" 
                onChange = {props.onChange}
            />
}

export default Input;