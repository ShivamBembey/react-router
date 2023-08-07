import {Link} from 'react-router-dom';
import './Navigation.css';


function Navigation(){
    return(
      <div>
      <div className='container'>

      <Link to='/homepage'>
      <button className='home-button btn'>HomePage</button>
      </Link>

      <Link to='/page1'><button className='about-button btn'>Page One</button></Link>
      
      <Link to='/page2'>
      <button className='btn contact-button'>Page Two</button>
      </Link>
      
      <Link to='/page3'>
      <button className='btn entertainment-button'>Page Three</button>
      </Link>
      </div>
      </div>
    )
}
export default Navigation;