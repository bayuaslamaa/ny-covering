import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import {envi} from "../config"
import {useSelector} from 'react-redux'
import { CardDeck, Card} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import ButtonAddCart from '../components/ButtonCart' 

export default function Misha() {
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
    const item4 = useSelector(state => state.items[3].img)
    const item5 = useSelector(state => state.items[4].img)
    const item6 = useSelector(state => state.items[5].img)
    return (<div  className={`container col-sm-${9}`} style={{marginBottom: 40}} >
        <CardDeck>
                    
                    <Card onClick={() => pushToItem(4)}>
                        <Card.Img variant="top" src={item4}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>Misha Khimar - Nude</Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                               Berbahan Arabian Crepe HQ tekstur
                    </Card.Text>
                            <Card.Text>  Pet anti tembem yang kokoh</Card.Text>
                            <Card.Text>Panjang depan 60 cm </Card.Text>
                            <Card.Text>Panjang belakang 110 cm </Card.Text>
                            <Card.Text>FREE CADAR TALI</Card.Text>
                            {/* <div style={{backgroundColor: "grey", color:"white"}}>
                            <Card.Text>PROMO IDUL ADHA</Card.Text>
                            <Card.Text>BELI 3 PCS KHIMAR</Card.Text>
                            <Card.Text>FREE ONGKIR PULAU JAWA</Card.Text>
                            <Card.Text>SUBSIDI ONGKIR IDR 30,000 LUAR PULAU JAWA</Card.Text>
                            <Card.Text style={{fontWeight: 900, color: "black"}}>HANYA UNTUK 50 PEMBELI PERTAMA</Card.Text>
                            </div> */}
                            
                            <Card.Text>    IDR 100,000</Card.Text>
                            <ButtonAddCart id={4} />
                        </Card.Body>
                        {/* <Card.Footer>
                            <p className="text-muted">Stocks: 50</p>
                        </Card.Footer> */}
                    </Card>
                    <Card onClick={() => pushToItem(5)}>
                        <Card.Img variant="top" src={item5} />
                        <Card.Body>
                            <Card.Title style={{fontWeight: 600}}>Misha Khimar - Oat Vanilla</Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                               Berbahan Arabian Crepe HQ tekstur
                    </Card.Text>
                            <Card.Text>  Pet anti tembem yang kokoh</Card.Text>
                            <Card.Text>Panjang depan 60 cm </Card.Text>
                            <Card.Text>Panjang belakang 110 cm </Card.Text>
                            <Card.Text>FREE CADAR TALI</Card.Text>
                            <Card.Text>    IDR 100.000</Card.Text>
                            <ButtonAddCart id={5} />
                        </Card.Body>
                        {/* <Card.Footer>
                            <p className="text-muted">Stocks: 20</p>
                        </Card.Footer> */}
                    </Card>
                    <Card onClick={() => pushToItem(6)}>
                        <Card.Img variant="top" src={item6}  />
                        <Card.Body>
                            <Card.Title style={{fontWeight: 600}}>Misha Khimar - Coffee</Card.Title>
                            <Card.Text>Spesifikasi:</Card.Text>
                            <Card.Text>
                               Berbahan Arabian Crepe HQ tekstur
                    </Card.Text>
                            <Card.Text>  Pet anti tembem yang kokoh</Card.Text>
                            <Card.Text>Panjang depan 60 cm </Card.Text>
                            <Card.Text>Panjang belakang 110 cm </Card.Text>
                            <Card.Text>FREE CADAR TALI</Card.Text>
                            <Card.Text>    IDR 100.000</Card.Text>
                            <ButtonAddCart id={6} />
                        </Card.Body>
                        {/* <Card.Footer>
                            <p className="text-muted">Stocks: 30</p>
                        </Card.Footer> */}
                    </Card>


                </CardDeck>
    </div >
    )
}