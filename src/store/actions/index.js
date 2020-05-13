import axios from 'axios'

export const SET_PRODUCTS = 'SET_PRODUCTS'


export const setProducts = data => {
    return {
        type: SET_PRODUCTS,
        payload: data
    }
}


function fetchProducts() {
    return axios.get('https://protected-thicket-20896.herokuapp.com/products')
}

export const getProducts = () => {
    return dispatch => {
        fetchProducts()
            .then(({ data }) => {
                const { products } = data
                dispatch(setProducts(products))
            })
            .catch(console.log)
    }
}