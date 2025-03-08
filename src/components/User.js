import { useEffect, useState } from "react";

const User = (props) =>{

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);

    useEffect(()=>{
        // API Calls
        // const timer= setInterval(()=>{
        //     console.log("Hello REACT OP IN FUNCT")
        // },1000)
        // console.log("useEffect");

        // return ()=>{
        //     clearInterval(timer);
        //     console.log("useEffect return")
        // }

    },[])

    console.log("Render")
    
    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count: {count}</h1>
            <h1>Count1: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: Hyderabad</h3>
            <h4>Contact: @vijay</h4>
        </div>
    )
}

export default User;