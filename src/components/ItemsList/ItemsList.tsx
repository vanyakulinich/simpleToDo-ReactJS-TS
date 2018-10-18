import * as React from 'react';
import './style.css'

import SingleItem from '../SingleItem/SingleItem'

interface IListProps {
    list: string[],
    deleteItem: (e:string) => void,
}

const ItemsList:React.SFC<IListProps> = ({list, deleteItem})=>{
    return(
        (list.length) ? 
            (<ul className='list'>
                {list.map(el => <SingleItem key={el} element={el} deleteItem={deleteItem}/>)}
            </ul>)
            :
            (<h3>No tasks in list.</h3>)
    )
}

export default ItemsList;
