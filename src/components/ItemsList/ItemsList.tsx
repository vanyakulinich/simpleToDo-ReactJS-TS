import * as React from 'react';

import SingleItem from '../SingleItem/SingleItem'

interface IListProps {
    list: string[],
    deleteItem: (e:any)=>void,
}


const ItemsList:React.SFC<IListProps>=(props: IListProps)=>{
    return(
        <ul>
            {props.list.map(el=><SingleItem key={el} element={el} deleteItem = {props.deleteItem}/>)}
        </ul>
    )
}

export default ItemsList;
