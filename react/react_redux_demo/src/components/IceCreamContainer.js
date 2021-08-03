import React from 'react';
import { connect } from 'react-redux';
import { buy_Icecream } from '../redux/iceCream/iceCreamActions';

function iceCreamContainer(props) {
    return (
        <div>
        <h2>Number of iceCream - {props.numOfIcecream}</h2>
        <button onClick={props.buy_Icecream}>Buy Icecream</button>

        </div>
    );
}

const MapStateToProps = state=>{
    return{
        numOfIcecream : state.icecream.numOfIcecream
    }
}

const MapDispatchToProps = dispatch=>{
    return{
        buy_Icecream:()=>dispatch(buy_Icecream())
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(iceCreamContainer);