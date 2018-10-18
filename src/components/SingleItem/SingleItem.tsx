import * as React from 'react';
import './style.css'

interface IProps {
    element: string,
    deleteItem: (e:string) => void,
}

const SingleItem:React.SFC<IProps> = (props: IProps)=>{

    const del = ()=>{
        props.deleteItem(props.element)
    }

    return (
        <li className = 'listItem'>
            {props.element}
            <button className='delButton' onClick={del}>x</button>
        </li>
    )
}

export default SingleItem;