import {Link} from 'react-router-dom';

import './Page2.css';
function Page2(){
    return(
        <div className='contact-container'>
            <h1>Page Two</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
            
        </div>
    )
}
export default Page2;