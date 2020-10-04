import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import {envi} from "../config"
import {useSelector} from 'react-redux'
import { CardDeck, Card, Badge} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 

export default function Cadar() {

    useEffect(()=>{
        if(envi === "production") {
            ReactPixel.init("614220549496198")
            ReactPixel.track("ViewContent")
        }
      }, [])
    const item28 = useSelector(state => state.items[27])
    return (<div  className={`container col-${3}`} >
        <CardDeck>
                    
                    <Card>
                        <Card.Img variant="top" src={item28.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item28.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 20,000</Card.Text>
                            <ButtonAddCart id={28} />
                        </Card.Body>
                    </Card>
                
                </CardDeck>
    </div >
    )
}