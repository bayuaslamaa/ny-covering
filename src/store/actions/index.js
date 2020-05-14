import axios from 'axios'

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_KHIMAR = 'SET_KHIMAR'
export const SET_ABAYA = 'SET_ABAYA'

export const setProducts = data => {
    return {
        type: SET_PRODUCTS,
        payload: data
    }
}

export const setKhimar = data => {
    return {
        type: SET_KHIMAR,
        payload: data
    }
}

export const setAbaya = data => {
    return {
        type: SET_ABAYA,
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
                products.map(product => {
                    if (product.name.toLowerCase().includes("misha") && !product.name.toLowerCase().includes("khimar")) dispatch(setAbaya(product))
                    if (!product.name.toLowerCase().includes("misha") && product.name.toLowerCase().includes("khimar")) dispatch(setKhimar(product))
                })
            })
            .catch(console.log)
    }
}