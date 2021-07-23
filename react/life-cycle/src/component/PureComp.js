import React, { PureComponent } from "react";

class PureComp extends PureComponent{
    render(){
        console.log('pure component rendered')
        return(
            <div>
               pure component {this.props.Name}
            </div>
        )
    }
}

export default PureComp