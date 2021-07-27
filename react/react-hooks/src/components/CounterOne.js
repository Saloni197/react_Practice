import React, { useReducer } from 'react';
const inititalState = 0

const reducer = (State, action)=>{
  switch (action) {
        case 'increment':
          return State + 1
        case 'decrement':
            return State - 1
        case 'reset':
            return inititalState
        default:
            return State
  }
}

function CounterOne(props) {
    const [count,dispatch]=useReducer  (reducer,inititalState)
    return (
        <div>
             <div> Count : {count}</div>
            <button onClick = {()=>dispatch('increment')}>Increment</button>
            <button onClick = {()=>dispatch('decrement')}>Decrement</button>
            <button onClick = {()=>dispatch('reset')}>Reset</button>
        </div>
    );
}

export default CounterOne;