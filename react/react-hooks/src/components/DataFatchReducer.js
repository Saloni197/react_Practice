import React, { useEffect, useReducer } from 'react';
import axios from 'axios'

const initialState ={
    loading:true,
    error: '',
    post:{}
}

const reducer = (state,action)=>{ 
    switch (action.type) {
        case 'Fatch_Success':
        return{
            loading:false,
            error:'',
            post:action.payload
        }
        case 'Error':
        return{
                loading:false,
                error:'Something went wrong',
                post:{}
            }
    
        default:
            return state
    }

}

function DataFatchReducer() {
    const[state,dispatch] =  useReducer(reducer,initialState)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>{
          dispatch({type:'Fatch_Success', payload:res.data})
        })
        .catch(error=>{
        dispatch({type:'Error'})
        })

    },[])
    return (
        <div>
             {state.loading ? 'loading' : state.post.email}
            {state.error ? state.error :null}
        </div>
    );
   
}

export default DataFatchReducer;