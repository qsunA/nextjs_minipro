import React from 'react';
import './BookItem.css';
import Icon from '@material-ui/core/Icon';
import StyleBadge from '../common/StyleBadge';
import RightIcon from '../common/RightIcon';
import NameLabel from '../common/NameLabel';

const BookItem = ({item}) => {
    return(
        <div className="BookItem">            
            <div className="img"> <Icon>{item.img}</Icon></div>            
            <div className="name"><NameLabel label={item.name} /></div>
            <div className="badge">
                <StyleBadge content={item}/>
            </div>            
            <div className="icon"><RightIcon/></div>
        </div>
    );
} 

export default BookItem;