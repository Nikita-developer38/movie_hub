import axios from 'axios'
export const getAllMovies = async () => {
    const res = await axios.get("http://localhost:5000/movie/getAllMovies").catch((err) => console.log(err));
    if (res.status !== 200) {
        console.log("Error while fetching data");
        return;
    }
    const data = await res.data;
    return data;
}

export const getAllBollywood = async () => {
    const res = await axios.get("http://localhost:5000/bollywood").catch((err) => console.log(err));
    if (res.status !== 200) {
        console.log("Error while fetching data");
        return;
    }
    const data = await res.data;
    return data;
}

export const sendUserAuth = async (data, signup) => {
    try {

        const res = await axios.post(`http://localhost:5000/user/${signup ? "signup" : "login"}`, {
            name: signup ? data.name : " ",
            email: data.email,
            password: data.password
        });

        if (res.status !== 200 && res.status !== 201) {
            console.log("Error while fetching data");
            return;
        }
        return res.data;
    }


    catch (err) {
        console.log(err);
        return null;
    }


}

export const sendAdminAuth = async (data) => {
    try {
        const res = await axios.post("http://localhost:5000/admin/login", {
            email: data.email,
            password: data.password
        });

        if (res.status !== 200) {
            console.log("Error while fetching data");
            return;
        }
        return res.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

export const getMovieDetails = async (id) => {
    try {
        const res = await axios.get(`http://localhost:5000/movie/${id}`);
        if (res.status !== 200) {
            console.log("Error while fetching data");
            return;
        }
        return res.data;

    }
    catch (err) {
        console.log(err);
        return null;
    }

}

export const newBooking = async (data) => {
    try {
        const res = await axios.post("http://localhost:5000/booking", {
            movie: data.movie,
            showTime: data.showTime,
            Date: data.date,
            seatNumber: data.seatNumber,
            user: localStorage.getItem("userId")
        });
        console.log(res.data);
        return res.data;
    } catch (err) {
        if (err.response && err.response.status === 404) {
            console.error("Error: Booking endpoint not found");
        } else {
            console.error(err);
        }

        return null; // or throw err;
    }
};



export const getUserBooking = async () => {
    const id = localStorage.getItem("userId");
    try {
        const res = await axios.get(`http://localhost:5000/user/getBookings/${id}`);

        return res.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}



export const addMovie = async (data) => {
    const token = localStorage.getItem("adminToken");

    try {
        const res = await axios.post("http://localhost:5000/movie",
            {
                title: data.title,
                description: data.description,
                actors: data.actors,
                releaseDate: data.releaseDate,
                posterUrl: data.posterUrl,
                featured: data.featured
            },
            {

                headers: {
                    Authorization: `Bearer ${token}`
                },


            });


        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}