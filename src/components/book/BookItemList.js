import React from 'react';
import BookItem from './BookItem';

const items = [
    {
        name: 'Macbeth',
        createDate : new Date(),
        img : 'headset',
        eventFlag : true
    },
    {
        name: 'Romeo & Juliet',
        createDate : new Date(),
        img : 'gamepad',
        eventFlag : false
    },
    {
        name: 'King Rear',
        createDate : new Date(),
        img : 'dock',
        eventFlag : false
    }
]

const BookItemList = ()=>{
    const itemList = items.map(item => <BookItem item={item} key={item.name}/>)
    return <div>{itemList}</div>
}

export default BookItemList;