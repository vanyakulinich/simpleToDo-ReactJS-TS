import * as React from 'react';
import './style.css'

import SingleItem from '../SingleItem/SingleItem'

interface IListProps {
    list: string[],
    deleteItem: (e:any)=>void,
}


const ItemsList:React.SFC<IListProps>=(props: IListProps)=>{
    const {list} = props;
    return(
        (list.length) ? 
            (<ul className='list'>
                {list.map(el=><SingleItem key={el} element={el} deleteItem = {props.deleteItem}/>)}
            </ul>)
            :
            (<h3>No tasks in list.</h3>)
    )
}

export default ItemsList;
