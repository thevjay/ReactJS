import React, { useState } from 'react'
import ItemList from './ItemList';

const ResCategory = ({data,showItems,setShowIndex,dummy}) => {
    
    //  const [showItems,setShowItems] = useState(false);

    const handleClick = () =>{
      // setShowItems(!showItems);
      setShowIndex((prevIndex)=>(prevIndex===showItems ? null : showItems))
    }

  return (
    <div>
      {/**
       * Header
       * Accordion Body
       * 
       */}
       <div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {/**Accordion Body*/}
            {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
       </div>
    </div>
  )
}

export default ResCategory;
