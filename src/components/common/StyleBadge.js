import React from 'react';
import { Badge } from '@material-ui/core';
import { getDiffDate } from '../util';
const StyleBadge = ({content})=>{
    let color;
    let text; 
    
    // 이벤트/new/update 우선순위별로 나오게 된다. 

    if(content.eventFlag){
        text="event"
        color="secondary"
    }
    else if(getDiffDate(content.createDate,7)){
        text="new"
        color="primary"
    }else if(getDiffDate(content.updateDate,7)){
        text = "update";
        color = "default";
    }   

    return(
        <Badge badgeContent={text} color={color} children=""/>
    )
}

export default StyleBadge;