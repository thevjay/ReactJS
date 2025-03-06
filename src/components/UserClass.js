import React from "react";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:null
            }
        }
        //console.log( this.props.name+"Child Contructor")  //first mounting call
    }

    async componentDidMount(){
        console.log(this.props.name+"Child Component Did Mount") // Third call
        //API Call

        const data = await fetch("https://api.github.com/users/thevjay");
        const json = await data.json();

        this.setState({
            userInfo:json,
        })

        this.timer=setInterval(()=>{
            console.log("Hello REACT OP")
        },1000)
    }

    componentDidUpdate(prevProps,prevState){
        // two useEffect [variable]
        if(this.state.count !== prevState.count  ){
            //cod
        }
        if(this.state.count2 !== prevState.count2 ){
            //code
        }

        console.log("Component Did Update");
    }

    componentWillUnmount(){  // clean up 
        console.log("Component Will Unmout");
        clearInterval(this.timer);
    }

    render(){
        // const { name, location } = this.props;
         const { count} = this.state

        //console.log(this.props.name + "Child Render"); // second mounting call

        const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button 
                    onClick={()=>{
                        // NEVER UPDATE STATE VARIABLES DIRECTLY
                        this.setState({
                            count:this.state.count + 1,
                        })
                    }}
                >
                    Increase(+)
                </button>
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @vijay</h4>
            </div>
        )
    }
}

export default UserClass;


/**
 * --- MOUNTING ---
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * ComponentDidMount
 *          <API Call>
 *          <this.seState>
 * 
 * --- UPDATE CYCLE ---
 *    Render(API data)
 *      <HTML (new API data)/>
 *
 * ComponetDidUpdate
 */