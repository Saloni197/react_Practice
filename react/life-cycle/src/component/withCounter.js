import React from 'react'

const withCounter = OriginalComponent =>{
class WithCounter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
               count : 0
        }
    }
    clickHandler = () =>{
        this.setState((prevState)=>{
            return {count:prevState.count + 1}

        })
    }
  render(){
      return <OriginalComponent count = {this.state.count} clickHandler = {this.clickHandler} />
  }
}
return WithCounter
}
export default withCounter