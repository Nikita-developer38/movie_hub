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