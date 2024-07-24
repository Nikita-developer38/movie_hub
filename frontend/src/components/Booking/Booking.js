import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getMovieDetails, newBooking } from '../../api/API';
import { useState } from 'react';
import { Typography, Box, Button, FormLabel, TextField } from '@mui/material';


const Booking = () => {
    const [movie, setmovie] = useState();
    const [inputs, setinputs] = useState({ seatNumber: '', date: "", showTime: '' })
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        getMovieDetails(id).then((res) => {

            setmovie(res.data);


        })
            .catch((err) => {

            })


    }, [id])
    const handleChange = (e) => {
        if (e.target.type === 'date') {
            const dateValue = e.target.valueAsDate;
            const formattedDate = `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1).toString().padStart(2, '0')}-${dateValue.getDate().toString().padStart(2, '0')}`;
            setinputs((prevState) => ({ ...prevState, date: formattedDate }));

        } else {
            setinputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        }


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        newBooking({ ...inputs, movie: movie._id }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        if (movie) {
            console.log(movie);
        }
    }, [movie]);


    return (
        <div>
            {movie &&
                <Fragment>


                    <Typography padding={3} fontFamily={'fantasy'} variant='h4' textAlign={'center'}>
                        Book Tickets
                    </Typography>

                    <Box width={'50%'}  >

                        <Typography variant='h5' fontSize={'26px'} fontWeight={'bold'}>
                            {movie.title}
                        </Typography>
                        <img src={movie.posterUrl} width={'300'} height={'250'} alt={movie.title} />

                        <Typography fontWeight={'bold'}>
                            Actors :
                            {movie.actors.map((actors) => actors + " |  ")}
                        </Typography>

                        <Typography>
                            Description :

                            {movie.description}
                        </Typography>
                        <Typography variant='h6'>
                            Release Date : {new Date(movie.releaseDate).toDateString()}

                        </Typography>

                    </Box>

                    <Box paddingTop={3} display={'flex'} flexDirection={'row'}>
                        <form onSubmit={handleSubmit}>
                            <Box padding={5} margin={'auto'} display={'flex'}>

                                <FormLabel>
                                    Booking Date

                                </FormLabel>
                                <TextField name='date' type={'date'} value={inputs.date} onChange={handleChange} margin='normal' variant='standard' />
                                <FormLabel>
                                    Seat Number

                                </FormLabel>
                                <TextField name='seatNumber' value={inputs.seatNumber} onChange={handleChange} type={'number'} margin='normal' variant='standard' />
                                <FormLabel>
                                    Show Time
                                </FormLabel>
                                <TextField name='showTime' value={inputs.showTime} onChange={handleChange} type={'time'} margin='normal' variant='standard' />

                            </Box>
                            <Button type='submit'>Book Now</Button>
                        </form>


                    </Box>




                </Fragment>
            }
        </div>
    )
}

export default Booking
