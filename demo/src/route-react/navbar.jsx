import {NavLink} from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
        <nav>
            <NavLink to ="/" className="nav">Home</NavLink>
            <NavLink to ="/About" className="nav">About</NavLink>
            <NavLink to ="/Products" className="nav">Products</NavLink>
        </nav>
        </div>
    );
}