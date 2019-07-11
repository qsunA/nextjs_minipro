import { inject, observer } from 'mobx-react';

function detail({content}){
    return(
        <div>
            안녕<br/>
            {content}
        </div>
    )
}

export default inject(({store})=>({
    content:store.number
}))(observer(detail));