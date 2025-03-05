import React from 'react'
import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({resData}) => {


    const {name,cuisines,cloudinaryImageId} = resData.info;
    
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}> 
            <img 
                className="res-logo" 
                alt='Name'
                src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard
