import React, { Component } from "react";

class StateComponent extends Component{



    state = {

    name: "Abhishek",
    email: "Abhishel.yadav98@gmail.com",
    age: "21"

    }
    changeState = ()=>{
this.setState({
    email:"abhydv@outlook.com"
},()=>{console.log('state chganged')
console.log(this.state.email)})
    }

    render(){

        return(

          <>

            <h3>Welcome : {this.state.name}</h3>
            <h3>Email is : {this.state.email}</h3>
        
            <button className="btn btn-dark btn-small" onClick={this.changeState}>Change State</button>
        </>

        )

    }


}
export default StateComponent;