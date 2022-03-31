import axios from "axios";

export const fetchAllusers = async () => axios.get('https://jsonplaceholder.typicode.com/users')

export const fetchUserByID = async (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)