import React from 'react';
import { connect } from 'react-redux';
import { buy_Cake } from '../redux/cakes/cakeAction';

function CakeContainer(props) {
    return (
        <div>
        <h2>Number of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buy_Cake}>Buy Cake</button>
            
        </div>
    );
}

const MapStateToProps = state=>{
    return{
        numOfCakes : state.cake.numOfCakes
    }
}

const MapDispatchToProps = dispatch=>{
    return{
        buy_Cake:()=>dispatch(buy_Cake())
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(CakeContainer);