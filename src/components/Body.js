import React, { useContext, useEffect } from 'react'
import RestaurantCard, { withPromotedLabel } from './RestaurantCard'
import { useState } from 'react';
import { RES_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
    // Local State Variable - super powerful variable
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const onlineStatus = useOnlineStatus();
    const [searchText,setSearchText] = useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const { loggedInUser,setUserName } = useContext(UserContext);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch(RES_URL);

        const jsonData = await data.json();

        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    
    
    if(onlineStatus === false) 
        return (
            <h1>Looks like you're offline!! Please check your internet connection</h1>
        )

    return  listOfRestaurants.length === 0 ? (<Shimmer/>):
    (
        <div className="body">
            <div className="flex ">
                <div className='m-4 p-4'>
                    <input 
                        type='text' 
                        data-testid='searchInput'
                        className='border border-black' 
                        value={searchText} 
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button
                        className='px-4 py-2 bg-green-100 m-4 rounded-lg'
                        onClick={()=>{
                            // Filter the restraunt cards update the UI
                            // searchText
                            const filteredRestaurant = listOfRestaurants.filter((res)=>{
                                return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                            })
                            setFilteredRestaurant(filteredRestaurant)
                        }}    
                    >
                        Search
                    </button>
                </div>
                <div className='m-4 p-4 flex items-center'>
                    <button 
                        className='px-4 py-2 bg-green-100 rounded-lg' 
                        onClick={()=>{
                            // Filter logic here
                            const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                            setFilteredRestaurant(filteredList)
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className='m-4 p-4 flex items-center'>
                    <label>UserName : </label>
                    <input 
                        className='border border-black p-2' 
                        value={loggedInUser} 
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
                
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {filteredRestaurant.map((restaurant)=>(
                    <Link 
                        key={restaurant.info.id} 
                        to={"restaurant/"+restaurant.info.id}
                    >   
                        {/* If the restaurant is promoted then add a promoted label to it */}
                        {
                            restaurant.info.promoted ? (
                                <RestaurantCardPromoted resData={restaurant}/>
                            ):(
                                <RestaurantCard  resData={restaurant}/>
                            )
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
}


export default Body;
