import React, { useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login")

    console.log("Header render");

    // if no dependency array => useEffect is called on every render
    // if the dependency array is empty = [] => useEffect is called on initial render(just Once)
    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated

    useEffect(()=>{
        console.log("useEffect called")
    },[])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button 
                        className='login' 
                        onClick={()=>{
                            btnNameReact === "Login"
                             ? setBtnNameReact("Logout")
                             : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
