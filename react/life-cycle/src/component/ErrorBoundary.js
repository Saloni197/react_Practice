import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)

        this.state = {
            hasError : false
        }
    }
    setErrorTrue = ()=>{
        this.setState({
            hasError : true
        })
    }
    static getDerivedStateFromError(Error){
        return{
                hasError : true
              }
    }
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    componentDidMount(){
        this.setErrorTrue()
    }
    render(){

        console.log(this.state.hasError)
       if(this.state.hasError){
           <h1>Something Get Wrong </h1>
       }
        return this.props.children
    }
}

export default ErrorBoundary