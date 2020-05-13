import axios from 'axios'

export const SET_PRODUCTS = 'SET_PRODUCTS'


export const setProducts = data => {
    return {
        type: SET_PRODUCTS,
        payload: data
    }
}


function fetchProducts() {
    return axios.get('http://localhost:3000/products')
}

export const getProducts = () => {
    return dispatch => {
        fetchProducts()
            .then(({ data }) => console.log(data))
            .catch(console.log)
    }
}