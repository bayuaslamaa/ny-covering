import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'
import ButtonOrder from '../components/ButtonCart'
import {useSelector} from 'react-redux'

// ReactPixel.init('235249274261502')
// ReactPixel.pageView()
// ReactPixel.track(event, data)
// ReactPixel.trackSingle('235249274261502',event, data)



export default function Abaya() {
    const item7 = useSelector(state => state.items[6].img)
    const item8 = useSelector(state => state.items[7].img)
    const item9 = useSelector(state => state.items[8].img)
    return (<div div className="container col-9" >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={item7} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 18 }}>Misha Abaya - Nude Mocca</Card.Title>
                    <Card.Text>
                                Arabian Crepe HQ
                    </Card.Text>
                            <Card.Text> Bahan bertekstur kulit jeruk yang empuk, stretch (agak melar ketika ditarik) dan jatuh.</Card.Text>
                            <Card.Text>Model abaya A line dengan cutting free step (bebas melangkah)</Card.Text>
                            <Card.Text>Ada saku kanan dan kiri</Card.Text>
                            <Card.Text>Ada resleting di dada (busui friendly)</Card.Text>
                            <Card.Text>Abaya ready dalam warna-warna pastel yg cantik! </Card.Text>
                            <Card.Text>READY STOCK</Card.Text>
                            <Card.Text>Size S LD 94 cm & PB 133 cm</Card.Text>
                            <Card.Text>    IDR 150.000</Card.Text>
                    <ButtonOrder id={7}/>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={item8} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 18 }}>Misha Abaya - Mocca Nude</Card.Title>
                    <Card.Text>
                                Arabian Crepe HQ
                    </Card.Text>
                            <Card.Text> Bahan bertekstur kulit jeruk yang empuk, stretch (agak melar ketika ditarik) dan jatuh.</Card.Text>
                            <Card.Text>Model abaya A line dengan cutting free step (bebas melangkah)</Card.Text>
                            <Card.Text>Ada saku kanan dan kiri</Card.Text>
                            <Card.Text>Ada resleting di dada (busui friendly)</Card.Text>
                            <Card.Text>Abaya ready dalam warna-warna pastel yg cantik! </Card.Text>
                            <Card.Text>READY STOCK</Card.Text>
                            <Card.Text>Size S LD 94 cm & PB 133 cm</Card.Text>
                            <Card.Text>    IDR 150.000</Card.Text>
                    <ButtonOrder id={8}/>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={item9} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 18 }}>Misha Abaya - Dusty Pink Vanilla</Card.Title>
                    <Card.Text>
                                Arabian Crepe HQ
                    </Card.Text>
                            <Card.Text> Bahan bertekstur kulit jeruk yang empuk, stretch (agak melar ketika ditarik) dan jatuh.</Card.Text>
                            <Card.Text>Model abaya A line dengan cutting free step (bebas melangkah)</Card.Text>
                            <Card.Text>Ada saku kanan dan kiri</Card.Text>
                            <Card.Text>Ada resleting di dada (busui friendly)</Card.Text>
                            <Card.Text>Abaya ready dalam warna-warna pastel yg cantik! </Card.Text>
                            <Card.Text>READY STOCK</Card.Text>
                            <Card.Text>Size S LD 94 cm & PB 133 cm</Card.Text>
                            <Card.Text>Size M LD 96 cm & PB 136 cm</Card.Text>
                            <Card.Text>    IDR 150.000</Card.Text>
                   <ButtonOrder id={9}/>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer>
            </Card>

        </CardDeck>

    </div >
    )
}