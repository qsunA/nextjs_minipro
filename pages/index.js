import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
function Home(){

    const [value, setValue] = useState(0);

    function handleChange(event,newValue){
        console.log(`newvalue : ${newValue}`);
        setValue(newValue);
    }

    return (
        <div>     
            Welcome Next js
            <div>
                <Link href="/mypage">
                    <a>my page</a>
                </Link>
                <div>
                    <Button variant="contained" color="primary">test</Button>
                </div>              
            </div>
        </div>
    );
}

export default Home;