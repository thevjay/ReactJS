import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react';
import resList from '../utils/mockData';


const Body = () => {
    // Local State Variable - super powerful variable

    const [listOfRestaurants,setListOfRestaurants] = useState(resList);


    return (
        <div className="body">
            <div className="filter">
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
                {listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}


export default Body
