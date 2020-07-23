import React from 'react'
import {useSelector} from 'react-redux'
// import {removeCart, addQuantity, addToCart, setShippingPrice}  from '../store/actions'
import { Button, Card, CardDeck} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Cart () {
    const addedItems = useSelector(state => state.addedItems)

    let items = addedItems.length ? (addedItems.map(item => {
        return(
            <>
            {/* <li className="collection-item avatar"  key={item.id}>
            <div className="item-img"> 
                <img src={item.img} alt={item.img} className=""/>
            </div>
        
            <div className="item-desc">
                <span className="title">{item.name}</span>
                <p><b>Price: IDR {item.price}</b></p> 
                <p>
                    <b>Quantity: {item.quantity}</b> 
                </p>
                <Button className="waves-effect waves-light btn pink remove" onClick={() => dispatch(removeCart(item.id))}>Batal</Button>
            </div>
            
       </li> */}
       
       <Card>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
        <Card.Text>    IDR {item.price} /pcs</Card.Text>
        <b>Jumlah: {item.quantity} pcs</b> 
                    </Card.Body>
                </Card>
      
       </>                      
)
        
    })
    ):(
        <h3 className="col-12">Belum Ada Pesanan</h3>
    )
    return(
        <div className="container col-12">
            <div className="cart"  >
                <div style={{marginTop: 0, paddingTop: 0, marginBottom: 65}}>
                <h1>Pesanan Kamu:</h1>
                </div>
                <CardDeck>
                    {items}
                </CardDeck>
                {addedItems.length ? (  <>
      <div style={{marginTop: 50}}>
 
       <Link to={{pathname: "/confirm"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 50 , fontSize: 25, marginBottom: 30}}>Check Out</Button> </Link>
    
       </div></>):''}
              
            </div>  
        </div>
   )
}