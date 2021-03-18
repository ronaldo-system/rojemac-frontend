import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const receita = axios.create({
    baseURL: 'https://www.receitaws.com.br/v1/cnpj'
})

export default api