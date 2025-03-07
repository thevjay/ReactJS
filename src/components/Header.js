import React, { useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RiRadioButtonLine } from "react-icons/ri";


const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();

    // if no dependency array => useEffect is called on every render
    // if the dependency array is empty = [] => useEffect is called on initial render(just Once)
    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated

    // useEffect(()=>{

    // },[])

    return (
        <div className="flex justify-between bg-pink-200 shadow-lg">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 md:space-x-5'>
                    <li className='px-4'>
                        <RiRadioButtonLine  style={{color: onlineStatus ? 'green':'red'}}/> 
                    </li>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'/grocery'}>Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button 
                        className='' 
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
