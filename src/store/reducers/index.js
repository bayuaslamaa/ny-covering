import {  ADD_TO_CART , REMOVE_CART, SUB_QUANTITY, SET_SHIPPING_PRICE, CLICK_MENU} from '../actions/index'
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
import ZaraLilac from '../../assets/ZaraLilac.jpg'
import ZaraOlive from '../../assets/ZaraOlive.jpg'
import ZaraFossil from '../../assets/ZaraFossil.jpg'
import ZaraMilky from '../../assets/ZaraMilky.jpg'
import ZaraBrownie from '../../assets/ZaraBrownie.jpg'
import BlackLilac from '../../assets/BlackLilac.jpg'
import BlackOlive from '../../assets/BlackOlive.jpg'
import BlackFossil from '../../assets/BlackFossil.jpg'
import BlackMilky from '../../assets/BlackMilky.jpg'
import BlackBrownie from '../../assets/BlackBrownie.jpg'
import BlackMustard from '../../assets/BlackMustard.jpg'
import BlackArmy from '../../assets/BlackArmy.jpg'
import BlackDarkMustard from '../../assets/BlackDarkMustard.jpg'
import PeachBeige from '../../assets/PeachBeige.jpeg'
import RugbyTan  from '../../assets/RugbyTan.jpeg'
import CandyPinkCadar from '../../assets/CandyPinkCadar.jpg'
import BabyBlueCadar from '../../assets/BabyBlueCadar.jpg'
import LightTaupeCadar from '../../assets/LightTaupeCadar.jpg'
import OliveGreenCadar from '../../assets/OliveGreenCadar.jpg'

import LovelyPink from '../../assets/LovelyPink.jpg'
import Mocca from '../../assets/Mocca.jpg'
import Navy from '../../assets/Navy.jpg'
import SkyBlue from '../../assets/SkyBlue.jpg'

import LovelyPink2 from '../../assets/LovelyPink2.jpg'
import DustyPink2 from '../../assets/DustyPink2.jpg'



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
        {id: 13, name: 'Zara Abaya - Lilac', price: 229000, qty: 0, img: ZaraLilac},
        {id: 14, name: 'Zara Abaya - Olive', price: 229000, qty: 0, img: ZaraOlive},
        {id: 15, name: 'Zara Abaya - Fossil', price: 229000, qty: 0, img: ZaraFossil},
        {id:16, name: 'Zara Abaya - Milky', price: 229000, qty: 0, img: ZaraMilky},
        {id: 17, name: 'Zara Abaya - Brownie', price: 229000, qty: 0, img: ZaraBrownie},
        //black
        {id: 18, name: 'Zara Abaya - Lilac', price: 229000, qty: 0, img: BlackLilac},
        {id: 19, name: 'Zara Abaya - Olive', price: 229000, qty: 0, img: BlackOlive},
        {id: 20, name: 'Zara Abaya - Fossil', price: 229000, qty: 0, img: BlackFossil},
        {id:21, name: 'Zara Abaya - Milky', price: 229000, qty: 0, img: BlackMilky},
        {id: 22, name: 'Zara Abaya - Brownie', price: 229000, qty: 0, img: BlackBrownie},
        {id: 23, name: 'Zara Abaya - Mustard', price: 229000, qty: 0, img: BlackMustard},
        {id:24, name: 'Zara Abaya - Army', price: 229000, qty: 0, img: BlackArmy},
        {id: 25, name: 'Zara Abaya - Dark Mustard', price: 229000, qty: 0, img: BlackDarkMustard},
        {id:26, name: 'Farhah Khimar - Peach Beige', price: 100000, qty: 0, img: PeachBeige},
        {id: 27, name: 'Farhah Khimar - Rugby Tan', price: 100000, qty: 0, img: RugbyTan},

        {id: 28, name: 'Farhah Cadar - Candy Pink', price: 20000, qty: 0, img: CandyPinkCadar},
        {id: 29, name: 'Farhah Cadar - Baby Blue', price: 20000, qty: 0, img: BabyBlueCadar},
        {id: 30, name: 'Farhah Cadar - Light Taupe', price: 20000, qty: 0, img: LightTaupeCadar},
        {id: 31, name: 'Farhah Cadar - Olive Green', price: 20000, qty: 0, img: OliveGreenCadar},
        {id: 32, name: 'Shayla Dress Style 1 - Lovely Pink', price: 190000, qty: 0, img: LovelyPink},
        {id: 33, name: 'Shayla Dress Style 1 - Mocca', price: 190000, qty: 0, img: Mocca},
        {id: 34, name: 'Shayla Dress Style 1 - Navy', price: 190000, qty: 0, img: Navy},
        {id: 35, name: 'Shayla Dress Style 1 - Sky Blue', price: 190000, qty: 0, img: SkyBlue},
        {id: 36, name: 'Shayla Dress Style 2 - Lovely Pink', price: 190000, qty: 0, img: LovelyPink2},
        {id: 37, name: 'Shayla Dress Style 2 - Dusty Pink', price: 190000, qty: 0, img: DustyPink2},

        
        
    ],
    addedItems: [],
    total: 0,
    click: false,
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
        case CLICK_MENU:
            return {
                ...state,
                click: action.status
            }
        default:
            return state
    }
}

