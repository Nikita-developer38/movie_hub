import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import { useParams } from 'react-router-dom'

import Button from "@mui/material/Button";
import { addMovie } from "../../api/API";
import { useEffect, useState } from "react";

const AddMovie = () => {
    const [newMovie, setnewMovie] = useState([])
    const [inputs, setinputs] = useState({ title: '', description: '', actors: '', releaseDate: '', posterUrl: '' })
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        addMovie().then((data) => {

            if (data && Array.isArray(data.data)) {
                setnewMovie(data.data);
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const handleChange = (e) => {
        if (e.target.type === 'date') {
            const dateValue = e.target.valueAsDate;
            const formattedDate = `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1).toString().padStart(2, '0')}-${dateValue.getDate().toString().padStart(2, '0')}`;
            setinputs((prevState) => ({ ...prevState, releaseDate: formattedDate }));

        } else {
            setinputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        }


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        const token = localStorage.getItem("adminToken");
        if (!token) {
            console.error("No token found");
            return;
        }

        addMovie({ ...inputs }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    console.log(newMovie);

    return (
        <React.Fragment>
            <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
                <Box sx={{ padding: 5 }}>
                    <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                        Add New Movie
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Title
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="title"
                                    type={"text"}
                                    name="title"
                                    label="Title"
                                    value={inputs.title}
                                    onChange={handleChange}
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Description
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="description"
                                    type={"text"}
                                    name="description"
                                    onChange={handleChange}
                                    value={inputs.description}
                                    multiline
                                    fullWidth
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Actors
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="actors"
                                    name="actors"
                                    label="actors"
                                    type={"text"}
                                    onChange={handleChange}
                                    value={inputs.actors}
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    URL
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="url"
                                    name="posterUrl"
                                    value={inputs.posterUrl}
                                    label="posterUrl"
                                    onChange={handleChange}
                                    type={"text"}
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Release Date
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="url"
                                    name="releaseDate"
                                    value={inputs.releaseDate}
                                    onChange={handleChange}
                                    type={"date"}
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>


                            <Grid item xs={12} sm={2}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    feature
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="author"
                                    name="feature"
                                    onChange={handleChange}
                                    value={inputs.feature}
                                    label="feature"
                                    type={"text"}
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                />
                            </Grid>



                            <Grid item xs={12} sm={12}>
                                <Button type="submit" variant="contained" margin={'auto'} sx={{ color: "#f1f1f2" }} justifyContent={'center'} >
                                    Add
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Box>
            </Paper>
        </React.Fragment>
    );
}


export default AddMovie