import axios from 'axios';

const ramApi = axios.create({
    baseURL:'https://rickandmortyapi.com/api'
});



export default ramApi;