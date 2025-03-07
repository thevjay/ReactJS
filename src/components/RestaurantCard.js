import React from 'react'
import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({resData}) => {


    const {name,cuisines,cloudinaryImageId,avgRating,costForTwo,deliveryTime} = resData.info;
    
    return(
        <div 
            className="p-4 m-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-100" 
        > 
            <img 
                className="rounded-lg" 
                alt='Name'
                src={CDN_URL+cloudinaryImageId}
            />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>Rs.{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard
