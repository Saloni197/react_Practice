import React, { useEffect, useState } from 'react';
import axios from 'axios'


function DataFatchingTwo(props) {

const[loading,setLoading] = useState(true)
const[error,setError] = useState('')
const[post,setPost] = useState({})

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res =>{
        setLoading(false)
        setError('')
        setPost(res.data)
    })
   .catch(error=>{
       setLoading(false)
       setPost({})
       setError('Something Went Wrong')
       
   })
},[])

    return (
        <div>
            {loading ? 'loading' : post.name}
            {error ? error :null}
        </div>
    );
}

export default DataFatchingTwo;