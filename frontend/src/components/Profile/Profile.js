import React from 'react'
import { useEffect } from 'react'
import { getUserBooking } from '../../api/API'
import { useState } from 'react'
import { Box } from '@mui/system'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material'
import { Fragment } from 'react'
import { Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Profile = () => {
    const [bookings, setbookings] = useState([]);
    // /**
    const [open, setOpen] = React.useState(false);



    const handleClose = (value) => {
        setOpen(false);

    };

    const handleClickOpen = () => {
        setOpen(true);
    };


    //  */

    useEffect(() => {
        getUserBooking()
            .then((res) => {
                if (res && res.data) {
                    setbookings(res.data);

                } else {
                    console.log("Bookings data is undefined or empty");
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);
    console.log(bookings);

    return (
        <Box width={"100%"} display={"flex"}>
            {bookings && bookings.length > 0 && <Fragment>  <Box flexDirection={'column'} justifyContent={"center"} width={'30%'}>
                <AccountCircleIcon sx={{ width: 250, height: 250 }} />



            </Box>
                <Box justifyContent={"center"} width={'70%'}>
                    <Typography variant={"h4"}>Bookings{bookings[0].user.name}</Typography>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'start'}>
                        {bookings.map((booking, index) => {
                            return (
                                <Box key={booking._id} flexDirection={'column'} justifyContent={"center"} border={'1px solid #ccc'} borderRadius={'6px'} width={'70%'} padding={1}>
                                    <Typography variant={"h6"}>Movie: {booking.movie.title}</Typography>
                                    <Typography variant={"h6"}>Show Time: {booking.showTime}</Typography>
                                    <Typography variant={"h6"}>Date: {booking.Date}</Typography>
                                    <Typography variant={"h6"}>Seat Number: {booking.seatNumber}</Typography>
                                    <Button variant="outlined" color="error" onClick={handleClickOpen} justifyContent={'center'}>
                                        cancel Booking
                                    </Button>
                                    <Dialog onClose={handleClose} open={open}>
                                        <DialogTitle>Booking Cancellation </DialogTitle>
                                        <Box display={'flex'} justifyContent={'inline'} >
                                            <Button width={'50%'} onClick={handleClose}>Cancel</Button>
                                            <Button width={'50%'} onClick={handleClose}>Delete</Button>
                                        </Box>



                                    </Dialog>
                                </Box>


                            )
                        }
                        )}
                    </Box>
                </Box>
            </Fragment>}
        </Box>
    )
}

export default Profile
