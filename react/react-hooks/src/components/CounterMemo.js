import React, { useMemo, useState } from 'react';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';

function CounterMemo() {

    const[counterOne,setCounterOne] = useState(0)
    const[counterTwo,setCounterTwo] = useState(0)

    const incOne = ()=>{
        setCounterOne(counterOne + 1)
    }

    const incTwo = ()=>{
        setCounterTwo(counterTwo + 1)
    }
   
    const isEven =  useMemo(()=>{
        let i = 1
        while(i<2000000) i++
        return counterOne % 2 == 0
    },[counterOne])
    return (
        <div>
            Count = {counterOne}
            <button onClick= {incOne}>IncrementOne </button>
            <span>{isEven ?'Even' : 'Odd'}</span><br/>
            Count = {counterTwo}
            <button onClick = {incTwo}>IncrementTwo</button>
        </div>
    );
}

export default CounterMemo;