const redux = require("redux");
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const Buy_Cake = 'Buy_Cake'
const Buy_IceCream = 'Buy_IceCream'


function buyCake (){
    return{
        type: Buy_Cake,
        info:'First Redux Action'
    }
}

function buyIceCream (){
    return{
        type: Buy_IceCream,
        info: 'seconnd redux action'
    }
}

const initialState ={
    numofCakes : 10,
    numofIceCream : 15
}

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'Buy_Cake':
            return{
                ...state,
                numofCakes : state.numofCakes - 1
            }
            case 'Buy_IceCream':
                return{
                    ...state,
                    numofIceCream : state.numofIceCream - 1
                }
        default: 
        return state    
    }
}

const store = createStore(reducer,applyMiddleware(logger))
console.log('initial state' , store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsubscribe()