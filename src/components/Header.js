import React, { useContext, useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RiRadioButtonLine } from "react-icons/ri";
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store)=>store.cart.items);
    
    // if no dependency array => useEffect is called on every render
    // if the dependency array is empty = [] => useEffect is called on initial render(just Once)
    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated

    // useEffect(()=>{

    // },[])

    return (
        <div className="flex justify-between bg-gray-100 shadow-lg">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 md:space-x-5'>
                    <li className='px-4'>
                        <RiRadioButtonLine  style={{color: onlineStatus ? 'green':'red'}}/> 
                    </li>
                    <li className='px-4'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='px-4'>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to={'/grocery'}>Grocery</Link>
                    </li>
                    <li className='px-4 font-bold text-xl'>
                        <Link to={'/cart'}>Cart ({cartItems.length})</Link> 
                    </li>
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

                    <li className='px-4 font-bold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
