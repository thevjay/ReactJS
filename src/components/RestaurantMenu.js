import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ResCategory from './ResCategory';

const RestaurantMenu = () => {
    const { resId } = useParams()

    const dummy = "Dummy Data";

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex]=useState(null);


    if(resInfo === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card || [];
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    console.log("Extracted Categories:", categories);


    return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines} - {costForTwoMessage}</p>
      {/* categories accordions */}
      {categories.map((category,index)=>(
        // Controlled Component
        <ResCategory 
          key={category?.card?.card.title} 
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={()=> setShowIndex(index === showIndex ? null : index)}
          dummy={dummy}
        />
      ))}
    </div>
  )
}

export default RestaurantMenu;