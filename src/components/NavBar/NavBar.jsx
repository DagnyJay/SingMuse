import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = !props.user ?
        <nav>
            <Link exact to='/signup'>SIGNUP</Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link exact to='/login'>LOGIN</Link>
        </nav>
        :
        <div>
            <h4> Test the route? </h4>
        </div>

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;
