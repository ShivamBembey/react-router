import {Link} from 'react-router-dom';

import './Page3.css';
function Page3(){
    return(
        <div className='entertainment-container'>
            <h1>Page 3</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
        </div>
    )
}
export default Page3;
