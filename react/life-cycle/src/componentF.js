import React, { Component } from "react";
import { USerConsumer } from "./userContext";

class ComponentF extends Component{
    render(){
        return(
          <USerConsumer>
              {
                  (username)=>{
                   return <h2>Hello {username}</h2>
                  }
              }
          </USerConsumer>
        )
    }
}
export default ComponentF