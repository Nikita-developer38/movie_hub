import React from 'react'
import { getAllBollywood } from '../../api/API'
import { Box } from '@mui/material'

import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'



const Movies = () => {
    const [bollywood, setbollywood] = useState([])
    useEffect(() => {
        getAllBollywood().then((data) => {
            if (data && Array.isArray(data.data)) {
                console.log(data);
                setbollywood(data.data)
            }
        }).catch((err) => {
            console.log(err)
        })

    }, [])


    return (
        <Box>

            <Box display={'flex'} width={'100%'} justifyContent={'center'} flexWrap={'wrap'}>
                {bollywood.map((bollywood, index) => <MovieCard id={bollywood.id}
                    title={bollywood.title}
                    actors={bollywood.bollywood_text && bollywood.bollywood_text[0] ? bollywood.bollywood_text[0].actors : 'No Data '}
                    release_date={bollywood.bollywood_text && bollywood.bollywood_text[0] ? bollywood.bollywood_text[0].release_date : '2015 '}
                    poster_path={bollywood.poster_path}
                    summary={bollywood.bollywood_text && bollywood.bollywood_text[0] ? bollywood.bollywood_text[0].summary : 'Summary not available'}
                    story={bollywood.bollywood_text && bollywood.bollywood_text[0] ? bollywood.bollywood_text[0].story : 'story not available'}
                    runtime={bollywood.bollywood_meta && bollywood.bollywood_meta[0] ? bollywood.bollywood_meta[0].runtime : ''}
                    genres={bollywood.bollywood_meta && bollywood.bollywood_meta[0] ? bollywood.bollywood_meta[0].genres : ''}
                    key={index} />)}
            </Box>
        </Box>
    )
}

export default Movies