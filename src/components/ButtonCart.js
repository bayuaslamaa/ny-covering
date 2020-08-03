import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart, subQuantity, removeCart }  from '../store/actions'
import {MDBIcon} from 'mdbreact'

export default (props) => {
    const dispatch = useDispatch()
    const { id  } = props
    const [qty, setQty] = useState(0)
    const addCart = id => {
        dispatch(addToCart(id))
        setQty(qty + 1)
    }
    const substractCart = id => {
      if(qty > 1) {
        
        dispatch(subQuantity(id))
      }
      if(qty === 1){
        dispatch(removeCart(id))
      }
      setQty(qty - 1)
    }
    if(qty > 0) {
      return (
        <>
             <Button title="tambahkan jumlah order" onClick={()=>addCart(id)} variant="light" style={{backgroundColor:"#9C7A76", color:"white"}}>
             <MDBIcon icon="cart-plus" />
            </Button>
            {'  ' +qty+ '  '}
            <Button title="kurangi jumlah order" onClick={() => substractCart(id)} variant="light" style={{backgroundColor:"#9C7A76", color: "white"}}> <MDBIcon icon="minus" /></Button>
       </>
         )
    } else if (id === 2){
      return (<><Button title="mulai order"  variant="light" style={{backgroundColor:"grey", color: "white"}}><MDBIcon icon="cart-plus" /> Tambah Ke Keranjang</Button></>)
    } else {
            return (<><Button title="mulai order" onClick={() => addCart(id) } variant="light" style={{backgroundColor:"#9C7A76", color: "white"}}><MDBIcon icon="cart-plus" /> Tambah Ke Keranjang</Button></>)
    }

     
}
