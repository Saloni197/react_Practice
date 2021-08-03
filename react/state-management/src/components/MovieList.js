import React, { createContext, useState } from 'react';
import Movie from './Movie';
import { contextMovie } from './MovieContext';

function MovieList() {

    const [movies,setMovie] = createContext(contextMovie)
    
    return (
        <div>
           {movies.map(movie=>(
              <Movie name={movie.name} price={movie.price} key={movie.id}/>
           )

           )} 
        </div>
    );
}

export default MovieList;