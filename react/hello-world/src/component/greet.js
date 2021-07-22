const React = require("react");

// function Greet(){
//     return <h1>Hello Kavita!</h1>
// }

export const Greet = (props) => {
return(<div> 
<h1>Hello {props.name}, age is {props.age}</h1>
      {props.children}
      </div>
    )
}
//export default greet