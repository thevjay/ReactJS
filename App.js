/**
 * 
 * <div id="parent">
 *      <div id='child'>
 *          <h1></h1>
 *       </div>
 * </div>
 */


const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},
            [ 
                React.createElement("h1",{id:"heading",xyz:"Abc"},"I'm h1 tag !"),
                React.createElement("h1",{id:"heading",xyz:"Abc"},"I'm h1 tag !"),
                React.createElement("h1",{id:"heading",xyz:"Abc"},"I'm h1 tag !")
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

const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"rooetr"},
    "Hello World from React!"
)

// JSX


console.log(parent)  // object 
      
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent);


