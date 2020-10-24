import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import {envi} from "../config"
import {useSelector} from 'react-redux'
import { CardDeck, Card, Badge} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 
import {useHistory} from 'react-router-dom'

export default function Cadar() {
    const history = useHistory()
    const pushToItem = (itemId) => {
        history.push('/item/' + itemId)
    }
    useEffect(()=>{
        if(envi === "production") {
            ReactPixel.init("614220549496198")
            ReactPixel.track("ViewContent")
        }
      }, [])
    const item28 = useSelector(state => state.items[27])
    const item29 = useSelector(state => state.items[28])
    const item30 = useSelector(state => state.items[29])
    const item31 = useSelector(state => state.items[30])
    return (<div  className={`container col-sm-${12}`} >
        <CardDeck>
                    
                    <Card onClick={() => pushToItem(28)}>
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
                    <Card onClick={() => pushToItem(29)}>
                        <Card.Img variant="top" src={item29.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item29.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 20,000</Card.Text>
                            <ButtonAddCart id={29} />
                        </Card.Body>
                    </Card>
                    <Card onClick={() => pushToItem(30)}>
                        <Card.Img variant="top" src={item30.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item30.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 20,000</Card.Text>
                            <ButtonAddCart id={30} />
                        </Card.Body>
                    </Card>
                    <Card onClick={() => pushToItem(31)}>
                        <Card.Img variant="top" src={item31.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item31.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                            Matt : Babydoll HQ
Double layer (tidak terawang)
Breathable, no berembun untuk yang berkacamata dan TANPA jahit di hidung
                    </Card.Text>
                           
                            
                            <Card.Text>    IDR 20,000</Card.Text>
                            <ButtonAddCart id={31} />
                        </Card.Body>
                    </Card>
                
                </CardDeck>
    </div >
    )
}