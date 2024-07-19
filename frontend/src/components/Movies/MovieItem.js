import React from 'react'
import { Box, Card, CardHeader, CardActions, Button, IconButton } from '@mui/material';
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@mui/icons-material';



const MovieItem = ({ title, releaseDate, posterUrl, id }) => {

    return (
        <Box padding={"12px"} display={'flex'} justifyContent={'center'}  >
            <Card sx={{
                width: 245, height: 420, borderRadius: 5, ":hover": {
                    boxShadow: "10px 10px 20px #ccc"
                },
            }}>
                <CardHeader

                    title={title}
                    subheader={new Date(releaseDate).toLocaleDateString()}
                />
                <img src={posterUrl} alt={title} height={'60%'} width={'100%'} />

                <CardActions sx={{ justifyContent: 'center' }} >
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                    <Button margin={'auto'} justifyContent={'center'} sx={{ bgcolor: "red", color: "white" }}>
                        Book Now
                    </Button>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                </CardActions>


            </Card>

        </Box>


    )
}

export default MovieItem
