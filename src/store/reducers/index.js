import { SET_PRODUCTS, SET_KHIMAR, SET_ABAYA } from '../actions/index'


const initialState = {
    products: [],
    khimar: [],
    abaya: [],
    isLogin: false
}



export default function reducer(state = initialState, action) {
    const { type, payload } = action


    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload }
        case SET_KHIMAR:
            return { ...state, khimar: state.khimar.concat(payload) }
        case SET_ABAYA:
            return { ...state, abaya: state.abaya.concat(payload) }
        default:
            return state
    }
}