import React from "react"
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},
            [ 
                React.createElement("h1",{id:"heading",xyz:"Abc"},"I'm h1 tag !"),
                React.createElement("h2",{id:"heading",xyz:"Abc"},"I'm h1 tag !"),
                React.createElement("h3",{id:"heading",xyz:"Abc"},"I ub gcvytctctc")
            ]
        )
    ],
    [React.createElement("div",{id:"child"},
        [ 
            React.createElement("h1",{id:"heading",xyz:"Abc"},"I'm h1 tag !"),
            React.createElement("h1",{id:"heading",xyz:"Abc"},"I'm h1 tag !"),
            React.createElement("h1",{id:"heading",xyz:"Abc"},"I'm h1 tag !")
        ]
    )]
)



// JSX

// NPM 

console.log(parent)  // object 
      
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent);


