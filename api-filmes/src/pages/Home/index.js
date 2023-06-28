import React, { useState, useEffect } from "react";
import { Container, MovieList, Movie } from "./styles";
import { Link } from "react-router-dom";

function Home(){

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=>{

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=53c344e6ba791494d1b35ad0f623a6f7')
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return(
        <Container>
        <h1>Popular Movies</h1>
        <h2>To Day</h2>
        <MovieList>

            {movies.map(movie => {
                return (
                    <Movie key={movie.id}>
                        <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                        <span>{movie.title}</span>
                    </Movie>
                )
            })}
        </MovieList>
        </Container>
    ) 

}

export default Home;