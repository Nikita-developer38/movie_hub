import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MovieItem from './Movies/MovieItem'
import { useState, useEffect } from 'react'
import { getAllMovies } from '../api/API'

const HomePage = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getAllMovies().then((data) =>
            setMovies(data.data)

        )
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <Box width={'100%'} height={'100%'} margin={'auto'} marginTop={2}>
            <Box margin={'auto'} width={'80%'} height={'40vh'} padding={2}>
                <img src='https://www.moviepostershop.com/images/slideshow/new-releases.jpg' alt='New Release' width={'100%'} height={'100%'}></img>
            </Box>
            <Box padding={5} margin={"auto"} >
                <Typography variant='h4' textAlign={'center'}>
                    Latest Release
                </Typography>

            </Box>
            <Box display={'flex'} width={'100%'} justifyContent={'center'} flexWrap={'wrap'}>
                {movies.map((movie, index) => <MovieItem id={movie.id} title={movie.title} releaseDate={movie.releaseDate} posterUrl={movie.posterUrl} key={index} />)}
            </Box>
            <Box display={'flex'} padding={5} margin={'auto'}>
                <Button LinkComponent={Link} to='/movies' variant='outlined' sx={{ margin: 'auto', color: '#E50914' }}> View All Movies</Button>
            </Box>
        </Box>

    )
}

export default HomePage
