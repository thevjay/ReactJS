import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react';
import { RES_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
    // Local State Variable - super powerful variable
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const onlineStatus = useOnlineStatus();
    const [searchText,setSearchText] = useState("")

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
            <div className="filter">
                <div>
                    <input 
                        type='text' 
                        className='search-box' 
                        value={searchText} 
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button
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
                <button 
                    className='filter-btn' 
                    onClick={()=>{
                        // Filter logic here
                        const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                        setListOfRestaurants(filteredList)
                    }}
                >
                    Top Rated RestaurantCard
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant)=>(
                    <Link 
                        key={restaurant.info.id} 
                        to={"restaurant/"+restaurant.info.id}
                    >
                        <RestaurantCard  resData={restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}


export default Body;
