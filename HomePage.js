import {Link} from 'react-router-dom';

import './HomePage.css';
function HomePage(){
    return(
        <div className="home-container">
            <h1>Hello, This is home page!</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
        </div>
    )
}
export default HomePage;