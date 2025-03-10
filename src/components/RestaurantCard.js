import React from 'react'
import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({resData}) => {

    //console.log(resData);

    const {
        name,
        cuisines,
        cloudinaryImageId,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData.info;
    
    return(
        <div 
            data-testid="resCard"
            className="p-4 m-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-100" 
        > 
            <img 
                className="rounded-lg" 
                alt='Name'
                src={CDN_URL+cloudinaryImageId}
            />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>Rs.{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}


// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return(props)=>{
        return(
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard
