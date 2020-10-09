import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import {envi} from "../config"
import {useSelector} from 'react-redux'
import { CardDeck, Card, Badge} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 

export default function ShaylaTwo() {

    useEffect(()=>{
        if(envi === "production") {
            ReactPixel.init("614220549496198")
            ReactPixel.track("ViewContent")
        }
      }, [])
    const item36 = useSelector(state => state.items[35])
    const item37 = useSelector(state => state.items[36])
    return (<div  className={`container col-${6}`} >
        <CardDeck>
                    
                    <Card>
                        <Card.Img variant="top" src={item36.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item36.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={36} />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={item37.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item37.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={37} />
                        </Card.Body>
                    </Card>
             
                
                </CardDeck>
    </div >
    )
}