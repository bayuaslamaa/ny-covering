import { SET_PRODUCTS } from '../actions/index'


const initialState = {
    products: [],
    isLogin: false
}



export default function reducer(state = initialState, action) {
    const { type, payload } = action


    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}