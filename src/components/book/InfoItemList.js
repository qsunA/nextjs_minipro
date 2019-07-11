import React from 'react';
import NameLabel from '../common/NameLabel';
import RightIcon from '../common/RightIcon';
import InfoItem from './InfoItem';
import { inject, observer } from 'mobx-react';

const items = [
    {
        title:"무엇인가?"
    },
    {
        title:"설명?"
    },
    {
        title:"하나둘셋넷다섯여섯일곱여덟아홉열?"
    }
]

const InfoItemList = ({onPut})=>{
    const itemList = items.map((item,idx)=><InfoItem key={idx} item={item} onPut={onPut}/>)
    return(
        <div>
            {itemList}
        </div>
    );
}

export default inject(({store})=>({
    onPut: store.put
}))(observer(InfoItemList));