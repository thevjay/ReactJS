import React from 'react'
import { CDN_URL } from '../utils/constants'

const ItemList = ({items,dummy}) => {
    console.log(dummy)
    // Props Drilling
  return (
    <div>
      {items.map((item)=>(
        <div key={item.card.info.id} className='p-2 m-2 border-gray-00 border-b-2 text-left flex justify-between'>
            
            <div className='w-9/12'>
              <div className='py-2'>
                  <span>{item.card.info.name}</span>
                  <span>-Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice / 100}</span>
              </div>
              <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div className='w-3/12 p-4'>
              <div className='absolute'>
                <button className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg'>Add +</button>
              </div>
              <img src={CDN_URL+item.card.info.imageId} className='w-40 p-4'/>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList;
