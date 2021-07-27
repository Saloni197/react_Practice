import React, { useEffect, useState } from 'react';

function HookCounterEffect(props) {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log('updated this time')
        document.title = `You Clicked ${count} Times`
    },[count])
    return (
        <div>
             <input type = 'text' value = {name} onChange = {e=>setName(e.target.value)}/>
            <button onClick = {()=>setCount(count + 1)}>Click {count}</button>
        </div>
    );
}

export default HookCounterEffect;