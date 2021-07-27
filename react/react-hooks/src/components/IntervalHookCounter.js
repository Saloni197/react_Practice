import React, { useEffect, useState } from 'react';

function IntervalHookCounter(props) {
    const [count,setCount] = useState(0)

const tick = ()=>{
    setCount(count + 1)
}
    useEffect(()=>{
        const interval = setInterval(tick, 1000);
        console.log(interval)
        return ()=>{
            clearInterval(interval)
        }
    },[count])

    return (
        <div>
        {count}
        </div>
    );
}

export default IntervalHookCounter;