import React,{createContext, useState} from 'react';

export const contextMovie = createContext()

export function MovieContext(props) {
    const[movies,setMovie] = useState([
        {
            name:'Harry Potter',
            price:'$10',
            id:2563
        },
        {
            name:'The God Father',
            price:'$12',
            id:1236
        },
        {
            name:'Dark Knight',
            price:'$9',
            id:852365
        }
    ])
    return (
        <div>
        <contextMovie.Provider value={[movies,setMovie]}>
            {props.children}
        </contextMovie.Provider>
            
        </div>
    );
}
