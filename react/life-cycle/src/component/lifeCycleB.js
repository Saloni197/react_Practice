import React, { Component } from "react";

class LifeCycleB extends Component{
    constructor(props){
        super(props)

        this.state = {
          name: 'Kavita'
        }
        console.log('lifecycleB inside constructor')
    }
    static getDerivedStateFromProps(props , state){
        console.log('lifecycleB inside getDerivedStateFromProps ')
        return null
    }
    componentDidMount(){
        console.log('lifecycleB inside componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleB inside should component update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB inside getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB inside componentDidUpdate')
    }
    render(){
            console.log('lifecycleB inside render method')
            return(
            <div>
            </div>
        )
    }

}

export default LifeCycleB