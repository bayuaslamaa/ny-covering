

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_KHIMAR = 'SET_KHIMAR'
export const SET_ABAYA = 'SET_ABAYA'
export const SET_PACKAGES = 'SET_PACKAGES'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const ADD_QUANTITY = 'ADD_QUANTITY'
export const SUB_QUANTITY = 'SUB_QUANTITY'
export const SET_SHIPPING_PRICE = 'SET_SHIPPING_PRICE'


export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeCart = id => {
    return {
        type: REMOVE_CART,
        id
    }
}


export const addQuantity = id => {
      return {
          type: ADD_QUANTITY,
          id
      }
}
export const subQuantity = id => {
      return {
          type: SUB_QUANTITY,
          id
      }
}

export const setShippingPrice = price => {
    return {
        type: SET_SHIPPING_PRICE,
        price
    }
}

export const setPackages = data => {
    return {
        type: SET_PACKAGES,
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


