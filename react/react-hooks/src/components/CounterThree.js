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

function CounterThree(props) {
    const [count,dispatch]=useReducer  (reducer,inititalState)
    const [countTwo,dispatchTwo]=useReducer  (reducer,inititalState)

    return (
        <div>
             <div> Count : {count}</div>
            <button onClick = {()=>dispatch('increment')}>Increment</button>
            <button onClick = {()=>dispatch('decrement')}>Decrement</button>
            <button onClick = {()=>dispatch('reset')}>Reset</button>
       

         <div>
             <div> CountTwo : {countTwo}</div>
            <button onClick = {()=>dispatchTwo('increment')}>Increment</button>
            <button onClick = {()=>dispatchTwo('decrement')}>Decrement</button>
            <button onClick = {()=>dispatchTwo('reset')}>Reset</button>
        </div>
        </div>
    );
}

export default CounterThree;