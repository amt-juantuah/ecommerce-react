import axios from "axios";

const BASE_URL = "http://localhost:5005";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTNlOTU5MzAyZWU2MGI1MTc0MDliYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjE1Njk4MiwiZXhwIjoxNjcyNDE2MTgyfQ.wmxurODfwN_pyh2i_PWYbywa7rr-FO90ANZcW4GBt7U";

export const outsideRequest = axios.create({
    baseURL: BASE_URL,
})


export const insideRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
})