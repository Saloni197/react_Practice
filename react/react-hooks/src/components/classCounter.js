import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super();
        this.state={
            count:0
        }
    }
    clickHandler= ()=>{
    this.setState((prevState)=>({
        count: prevState.count + 1
    }))
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <button on onClick = {this.clickHandler}>clicked {count} times</button>
            </div>
        );
    }
}
export default ClassCounter;