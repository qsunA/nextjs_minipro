import React from 'react';
import NameLabel from '../common/NameLabel';
import RightIcon from '../common/RightIcon';
import './InfoItem.css';
import Router from 'next/router';

const InfoItem = ({item,onPut})=>{

    function handleClick(){
        console.log('handleclick');
        Router.push('/detail?content=test','/');
        onPut();
    }

    return(
        <div className="InfoItem">
            <div className="name"><NameLabel label={item.title} /></div>
            <div className="icon" onClick={handleClick}><RightIcon/></div>    
        </div>
    );
}

export default InfoItem;