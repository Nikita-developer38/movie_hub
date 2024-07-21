import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { CloseRounded } from '@mui/icons-material'

import Button from '@mui/material/Button'
import { Box, FormLabel, IconButton, TextField } from '@mui/material'


const AuthForm = ({ onSubmit, isAdmin }) => {
    const [isSignup, setisSignup] = useState(false)

    const [inputs, setinputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setinputs((prevState) =>
        ({
            ...prevState,
            [event.target.name]: event.target.value
        })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ inputs, signup: isAdmin ? false : isSignup })

    }

    return (
        <>

            <Dialog
                sx={{ borderRadius: 10 }}
                open={true}


            >
                <Box sx={{ ml: 'auto', padding: 1 }}>
                    <IconButton>
                        <CloseRounded />
                    </IconButton>
                </Box>
                <DialogTitle textAlign={'center'} variant='h4'>{isSignup ? "Signup" : "Login"}</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <Box display={'flex'} justifyContent={'center'}
                        sx={{ px: 4 }}
                        padding={1}

                        flexDirection={'column'}
                        width={400}
                        margin={'auto'}
                        alignContent={'center'}
                    >
                        {!isAdmin && isSignup && (
                            <>
                                <FormLabel sx={{ mt: 1, mb: 1 }}>Name</FormLabel>
                                <TextField margin='normal' value={inputs.name} onChange={handleChange} name="name" type="name" variant="standard" required />
                            </>
                        )}
                        <FormLabel sx={{ mt: 1, mb: 1 }}>Email</FormLabel>
                        <TextField margin='normal' name="email" value={inputs.email} onChange={handleChange} type="email" variant="standard" required />
                        <FormLabel sx={{ mt: 1, mb: 1 }}>Password</FormLabel>
                        <TextField margin='normal' name="password" value={inputs.password} onChange={handleChange} type="password" variant="standard" />

                        <Button sx={{ mt: 2, borderRadius: 10, bgcolor: "#E50914", color: "white" }} variant='contained' type="submit" fullWidth>{isSignup ? "Signup" : "Login"}</Button>
                        {!isAdmin && (
                            <Button sx={{ mt: 2, borderRadius: 10, bgcolor: "#dff1f2" }} onClick={() => setisSignup(!isSignup)} fullWidth>
                                Switch To {isSignup ? "Login" : "Signup"}
                            </Button>
                        )}

                    </Box>
                </form>
            </Dialog >


        </>
    )

}
export default AuthForm