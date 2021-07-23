import React, { Component } from "react";
import LifeCycleB from "./lifeCycleB";

class LifeCycleA extends Component{
    constructor(props){
        super(props)

        this.state = {
          name: 'Kavita'
        }
        console.log('lifecycleA inside constructor')
    }
    static getDerivedStateFromProps(props , state){
        console.log('lifecycleA inside getDerivedStateFromProps ')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA inside componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleA inside should component update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA inside getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA inside componentDidUpdate')
    }
    changeSatate = ()=>{
        this.setState({
            name:'Shiva'
        })
    }
    render(){
            console.log('lifecycleA inside render method')
            return(
            <div>
            <div>LifeCycleA</div>
            <LifeCycleB/>
            <button onClick= {this.changeSatate}>change state</button>
            </div>
        )
    }

}

export default LifeCycleA