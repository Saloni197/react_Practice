import React, { useEffect, useState } from 'react';

function HookMouse(props) {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e =>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    } 

    useEffect (()=>{
     console.log("Mouse Effect")
     window.addEventListener ('mousemove',logMousePosition) 

     return()=>{
        console.log("remove listner")
        window.removeEventListener('mousemove',logMousePosition)
    }
    },[])
   
    return (
        <div>
            Hooks: X - {x} ,  Y - {y}
        </div>
    );
}

export default HookMouse;