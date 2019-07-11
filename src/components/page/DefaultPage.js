import React from 'react';
import BookItemList from '../book/BookItemList';
import BookStepper from '../book/BookStepper';
import BookSlideItem from '../book/BookSlideItem';
import TitleLabel from '../common/TitleLabel';
import InfoItem from '../book/InfoItem';
import InfoItemList from '../book/InfoItemList';

const DefaultPage = ()=>{

    const name = "ruby";
    return(
        <div>
            <TitleLabel title={`${name}을 위한 추천 책`}/>
            <BookStepper/><br/>
            <TitleLabel title="전체 상품"/>
            <BookItemList/><br/>
            <TitleLabel title="사이트란 무엇인가"/>            
            <InfoItemList/>
        </div>

    );
}

export default DefaultPage;