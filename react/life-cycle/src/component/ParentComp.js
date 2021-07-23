import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'Kavita'
        }
    }
    componentDidMount(){
        setInterval(() => {
          this.setState({
              name:'Kavita'
          })  
        }, 2000);
    }
    render(){
        console.log('******************* Parent Component ***********************')
        return(
            <div>
              parent component
              <RegComp Name = {this.state.name}></RegComp>
              <PureComp Name = {this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp