import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
//import About from "./components/About";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//import Grocery from "./components/Grocery";
const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const App = () => {
    const [userName,setUserName]=useState();

    // authentication:
    useEffect(()=>{
        // Make an API call and send username and password
        const data = {
            name:"Jagan YS",
        };
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>,
            },
            {
                path:'/about',
                element:
                <Suspense fallback={<h1>Loading.......</h1>}>
                    <About/>
                </Suspense>,
            },{
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/grocery',
                element:
                <Suspense fallback={<h1>Loading.......</h1>}>
                    <Grocery/>
                </Suspense>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:'/cart',
                element:<Cart/>,
            }
        ],
        errorElement:<Error/>
    },
]) 


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)

export default App;

