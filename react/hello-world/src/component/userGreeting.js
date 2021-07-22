import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogged:true
        }
    }
    render(){
        // if/else
            // if(this.state.isLogged){
            //    return <div>Welcome Kavita</div>
            // }
            // else{
            //    return <div>Welcome Guest</div>
            // }

         //element variable
        //  let message
        //  if(this.state.isLogged){
        //      message =<div> Welcome KAvita</div>
        //  }   
        //  else{
        //      message =<div> Welcome Guests</div>
        //  }
        //  return <div>{message}</div>

        //ternery operator
        // return(
        //     this.state.isLogged ?
        //     <div>Welcome KAvita</div> :
        //     <div>Welcome Guest</div>
        // )

        //short circuit operator
        return this.state.isLogged && <div>Welcome KAvita</div>
    }
}

export default UserGreeting