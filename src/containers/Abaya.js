import React from 'react'
import Abaya1 from '../assets/Abaya1.jpg'
import Abaya2 from '../assets/Abaya2.jpg'
import Abaya3 from '../assets/Abaya3.jpg'
import { CardDeck, Card } from 'react-bootstrap'
import ButtonOrder from '../components/ButtonOrder'
// import ReactPixel from 'react-facebook-pixel'

// ReactPixel.init('235249274261502')
// ReactPixel.pageView()
// ReactPixel.track(event, data)
// ReactPixel.trackSingle('235249274261502',event, data)



export default function Abaya() {
   
    return (<div div className="container col-9" >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={Abaya1} />
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
                    <ButtonOrder/>
                </Card.Body>
                <Card.Footer onClick={() => console.log('hi')}>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Abaya2} />
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
                    <ButtonOrder/>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Abaya3} />
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
                   <ButtonOrder/>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer>
            </Card>

        </CardDeck>

    </div >
    )
}