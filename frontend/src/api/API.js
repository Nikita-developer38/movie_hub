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