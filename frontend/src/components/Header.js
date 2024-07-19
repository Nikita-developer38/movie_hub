import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Box, Autocomplete, TextField, Tabs, Tab } from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { getAllMovies } from '../api/API';
import { Link } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState(0);
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getAllMovies().then((data) => {

            if (data && Array.isArray(data.data)) {
                setMovies(data.data);
            }
        }).catch((err) => {
            console.log(err)
        })


    }, [])

    return (
        <AppBar position='sticky' sx={{ bgcolor: " #E50914" }}>
            <Toolbar>
                <Box width={'10%'}><MovieCreationIcon /></Box>
                <Box width={'30%'} margin={"auto"}>
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={movies.map(movie => movie.title)}
                        renderInput={(params) =>
                            <TextField sx={{ input: { color: "white" } }} variant='standard' {...params} placeholder="Search Movies" />}
                    />

                </Box>
                <Box display={'flex'}>
                    <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to="/movies" label="Movies" />
                        <Tab LinkComponent={Link} to="/admin" label="Admin" />
                        <Tab LinkComponent={Link} to="/auth" label="Auth" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>



    )
}

export default Header