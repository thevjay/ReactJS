import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (resId) => {


    const [resInfo,setResInfo]=useState(null);

    // fetchData
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(RESTAURANT_MENU+resId)
        const json = await data.json();

        setResInfo(json?.data)
    }

    return resInfo;
}

export default useRestaurantMenu;