import React from 'react'
import UserClass from './UserClass'
import User from './User';


class About extends React.Component{
  constructor(props){
    super(props);

    //console.log("Parent Contructor") // First Call
  }

  componentDidMount(){  // to make api call why
    //console.log("Parent Component Did Mount") // Third call means after the UserClass mount loaded

  }

  render(){
    //console.log("Parent Render") // second call
    return(
      <div>
        <h1>About</h1>
        <h2>This is Hello About</h2>
        {/* <UserClass name={"First (Classes)"} location={"Hyderabad (Classes)"}/> */}
        <User/>
      </div>
    )
  }
}


export default About
