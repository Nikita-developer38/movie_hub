import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import {
    CardHeader, CardActions, IconButton
} from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';


import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';




const MovieCard = ({ title, poster_path, story, actors, release_date, year_if_release, runtime, genres, summary }) => {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');


    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);




    return (
        <Box padding={"12px"} display={'flex'} justifyContent={'center'}   >
            <div onClick={() => handleClickOpen('paper')}>
                <Card sx={{
                    width: 345,

                    borderRadius: 5,
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc"
                    }
                }}
                    onClick={(e) => {
                        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'ICONBUTTON') {
                            handleClickOpen('paper')();
                        }
                    }}



                >
                    <CardHeader

                        title={title}
                        subheader={release_date}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={poster_path}
                        alt={title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {summary}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Typography>Run time :{runtime} min</Typography>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
            <Dialog sx={{
                backgroundImage: `url(${poster_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                position: 'relative',
            }}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <Typography variant="body1" component="span" fontWeight="bold">Genres:</Typography>
                        <Typography variant="body1" component="span">{genres}</Typography>
                        <br />
                        <Typography variant="body1" component="span" fontWeight="bold">Actors:</Typography>
                        <Typography variant="body1" component="span">{actors}</Typography>
                        <br />
                        <Typography variant="body1" component="span" fontWeight="bold">Story:</Typography>
                        <Typography variant="body1" component="span">{story}</Typography>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>

                </DialogActions>
            </Dialog>

        </Box >
    )
}

export default MovieCard