import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buy_Cake } from '../redux/cakes/cakeAction';

function HookCakeContainer(props) {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick = {()=>dispatch(buy_Cake())}>Buy Cake</button>
        </div>
    );
}

export default HookCakeContainer;