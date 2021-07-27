import React, { useReducer } from 'react';
const inititalState = {
    firstCounter : 0
}

const reducer = (State, action)=>{
  switch (action.type) {
        case 'increment':
          return {firstCounter:State.firstCounter + 1}
        case 'decrement':
            return  {firstCounter:State.firstCounter - 1}
        case 'reset':
            return inititalState
        default:
            return State
  }
}

function CounterTwo(props) {
    const [count,dispatch]=useReducer  (reducer,inititalState)
    return (
        <div>
             <div> Count : {count.firstCounter}</div>
            <button onClick = {()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick = {()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick = {()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    );
}

export default CounterTwo;