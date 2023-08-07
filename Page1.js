import {Link} from 'react-router-dom';

import './Page1.css';
function Page1(){
    return(
        <div className='about-container'>
            <h1>Page 1</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
        </div>
    )
}
export default Page1;
