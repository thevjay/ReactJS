import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react';
import { RES_URL } from '../utils/constants';
import Shimmer from './Shimmer';


const Body = () => {
    // Local State Variable - super powerful variable
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("")
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);


    // 
    console.log("body render")
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch(RES_URL);

        const jsonData = await data.json();

        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

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
                            console.log(searchText)
                            const filteredRestaurant = listOfRestaurants.filter((res)=>{
                                res.info.name.toLowerCase().include(searchText);
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
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}


export default Body
