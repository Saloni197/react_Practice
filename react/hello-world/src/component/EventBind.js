import React, { Component } from 'react'

class EventBinding extends Component{
    constructor(){
        super()

        this.state = {
            message:'HELLO'
        }
        // this.eventHandler = this.eventHandler.bind(this)
    }
    // eventHandler(){
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     console.log(this)
    // }
    eventHandler = () =>{
      this.setState({
          message: 'Good Bye!'
      })
    }
    render(){
        return(
            <div> 
            <div>{this.state.message}</div><br/>
            {/* <button onClick = {this.eventHandler.bind(this)}>CLICK</button> */}
            {/* <button onClick = {()=> this.eventHandler()}>CLICK</button> */}
            <button onClick = {this.eventHandler}>CLICK</button>

            </div>
        )
    }
}

export default EventBinding