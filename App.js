import React from "react"
import ReactDOM from "react-dom/client";


// React Element = React.createElement => Object => HTMLElement(render)

// JSX - is not HTML in JS - HTML - Like
// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => ReactElement - JS Object - HTML Element(render)

const jsxHeading = (
    <h1 className="">
        Namaste react using JSX
    </h1>
)

const Title = () =>{
    return (
        <div className="head">
            Namaste JSX 
        </div>
    )
}
// React Component
// Class Based Component - OLD
// Functional Component - NEW

const data = api.getData();


const HeadingComponent = () => {
    return(
    <div id="container">
        <h1>{100 + 200}</h1>
        {data}
        <Title/>
        <h1 className="heading">Namaste React Functinal Componet</h1>
    </div> 
    )
}

// const fn = () => <h1>Common return</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent/>)