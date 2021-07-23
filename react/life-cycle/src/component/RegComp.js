import React, { Component } from "react";

class RegComp extends Component{
    render(){
        console.log('regular component render')
        return(
            <div>
              regular component {this.props.Name}
            </div>
        )
    }
}

export default RegComp