import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)

        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(Error){
        return{
                hasError : true
              }
    }
    // componentDidCatch(error,info){
    //     console.log(error)
    //     console.log(info)
    // }
    
    render(){

        console.log(this.state.hasError)
       if(this.state.hasError){
           return <h1>Something Get Wrong </h1>
       }
        return this.props.children
    }
}

export default ErrorBoundary