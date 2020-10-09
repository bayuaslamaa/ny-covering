import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import {envi} from "../config"
import {useSelector} from 'react-redux'
import { CardDeck, Card, Badge} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 

export default function ShaylaOne() {

    useEffect(()=>{
        if(envi === "production") {
            ReactPixel.init("614220549496198")
            ReactPixel.track("ViewContent")
        }
      }, [])
    const item32 = useSelector(state => state.items[31])
    const item33 = useSelector(state => state.items[32])
    const item34 = useSelector(state => state.items[33])
    const item35 = useSelector(state => state.items[34])
    return (<div  className={`container col-${12}`} >
        <CardDeck>
                    
                    <Card>
                        <Card.Img variant="top" src={item32.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item32.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={32} />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={item33.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item33.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={33} />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={item34.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item34.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={34} />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={item35.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item35.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={35} />
                        </Card.Body>
                    </Card>
                
                </CardDeck>
    </div >
    )
}