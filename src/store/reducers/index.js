import {  ADD_TO_CART , REMOVE_CART, SUB_QUANTITY, SET_SHIPPING_PRICE} from '../actions/index'
import BabyBlue from '../../assets/BabyBlue.jpg'
import Olive from '../../assets/ModelOlive.jpg'
import CandyPink from '../../assets/ModelPink.jpg'
import Nude from '../../assets/Nude.jpg'
import Coffee from '../../assets/Coffee.jpg'
import OatVanilla from '../../assets/OatVanilla.jpg'
import Abaya1 from '../../assets/AbayaNudeMocca.jpg'
import Abaya2 from '../../assets/AbayaMoccaNude.jpg'
import Abaya3 from '../../assets/AbayaDustyPink.jpg'
import setMoccaNude from '../../assets/SetMoccaNude.jpg'
import setNudeMocca from '../../assets/setNudeMocca.jpg'
import setDustyPink from '../../assets/setDustyPink.jpg'

const initialState = {
    items: [
        {id: 1, name: 'Farhah Khimar - Baby Blue', price: 100000, qty: 0, img: BabyBlue},
        {id: 2, name: 'Farhah Khimar - Olive Green', price: 100000, qty: 0, img: Olive},
        {id: 3, name: 'Farhah Khimar - Candy Pink', price: 100000, qty: 0, img: CandyPink},
        {id: 4, name: 'Misha Khimar - Nude', price: 100000, qty: 0, img: Nude},
        {id: 5, name: 'Misha Khimar - Oat Vanilla', price: 100000, qty: 0, img: OatVanilla},
        {id: 6, name: 'Misha Khimar - Coffee', price: 100000, qty: 0, img: Coffee},
        {id: 7, name: 'Misha Abaya - Nude Mocca', price: 150000, qty: 0, img: Abaya1},
        {id: 8, name: 'Misha Abaya - Mocca Nude', price: 150000, qty: 0, img: Abaya2},
        {id: 9, name: 'Misha Abaya - Dusty Pink Vanilla', price: 150000, qty: 0, img: Abaya3},
        {id: 10, name: 'Misha Set - Mocca Nude', price: 250000, qty: 0, img: setMoccaNude},
        {id:11, name: 'Misha Abaya - Nude Mocca', price: 250000, qty: 0, img: setNudeMocca},
        {id: 12, name: 'Misha Set - Dusty Pink Vanilla', price: 250000, qty: 0, img: setDustyPink},
    ],
    addedItems: [],
    total: 0
}



export default function reducer(state = initialState, action) {
    const { type } = action


    switch (type) {
       case ADD_TO_CART:
           let addedItem = state.items.find(item => item.id === action.id)
           let existedItem = state.addedItems.find(item => action.id === item.id)
           if(existedItem){
               addedItem.quantity += 1
               return {...state, total: state.total + addedItem.price}
           } else {
               addedItem.quantity = 1
               let newTotal = state.total + addedItem.price
               return {
                   ...state,
                   addedItems: [...state.addedItems, addedItem],
                   total: newTotal
               }
           }
        case REMOVE_CART:
            let itemToRemove = state.addedItems.find(item => action.id ===  item.id)
            let new_items = state.addedItems.filter(item =>  item.id !== action.id)
            
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        // case ADD_QUANTITY:
        //     // let added = state.items.find(item => item.id === action.id)
        //     // added.quantity+= 1
        //     // let new_total = state.total + added.price
        //     // return {
        //     //     ...state,
        //     //     total: new_total
        //     // }
        //     return {...state, items: state.items.map(item => {
        //         if(item.id === action.id) {
        //             item.qty++
        //         }
        //     })}
        case SUB_QUANTITY:
            let addItem = state.items.find(item=> item.id === action.id) 
            //if the qt == 0 then it should be removed
            if(addItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                let newTotal = state.total - addedItem.price
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                addItem.quantity -= 1
                let newTotal = state.total - addItem.price
                return{
                    ...state,
                    total: newTotal
                }
            }
        case SET_SHIPPING_PRICE:
            return {
                ...state,
                total: state.total + action.price

            }
        default:
            return state
    }
}

