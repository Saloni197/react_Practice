import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFatching(props) {
    const[ posts, setPosts] = useState({})
    const[ id, setId] = useState(1)
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(error=>{
            console.log(error)
            
        })
    },[idFromButtonClick])
    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }
    return (
        <div>
        <input type ='text' value = {id} onChange = {e=>setId(e.target.value)}/>
        <button type = 'button' onClick={handleClick}>Fetch Post</button>
        {posts.phone}
        {/* <ul>
            {
                posts.map(post=>
                <li key={post.id}>{post.title}</li>
                )
            }
        </ul> */}
            
        </div>
    );
}

export default DataFatching;