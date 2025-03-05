import React from "react"
import ReactDOM from "react-dom/client";


/**
 * Header
 *      - Logo
 *      - Nav Items
 * Body
 *      - Search
 *      - RestaurantContainer   
 *          - RestaurantCard
 *          - Name of Res, star Rating, cuisines, delivery tie
 * Footer
 *      - Copyright
 *      - Links
 *      - Address
 *      - Contanct
 */

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://img.freepik.com/premium-vector/food-logo-design_139869-254.jpg?w=2000" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = ({name,cuisines}) => {

    // const {name,cuisines} = props

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}> 
            <img 
                className="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c7b7f719d710175badabd8a3e646c849"
            />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {
                    
                }
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)