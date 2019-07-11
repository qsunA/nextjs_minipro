import React from 'react';
import NameLabel from '../common/NameLabel';

const BookSlideItem = ({item})=>{
    return(
        <div>
            <img src={item.imgPath} width="100%"/>
            <div>
                <NameLabel label={item.label} bold="bold"/><br/>
                <small>{item.desc}</small>             
            </div>
        </div>
    );
}

export default BookSlideItem;