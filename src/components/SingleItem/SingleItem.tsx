import * as React from 'react';

interface IProps {
    element: string,
    deleteItem: (e:any)=>any,
}

const SingleItem:React.SFC<IProps> = (props: IProps)=>{

    const del = ()=>{
        props.deleteItem(props.element)
    }

    return (
        <li>
            {props.element}
            <button onClick = {del}>x</button>
        </li>
    )
}

export default SingleItem;