import React from 'react'
import { CardDeck, Card} from 'react-bootstrap'
import ButtonOrder from '../components/ButtonOrder'
import BabyBlue from '../assets/BabyBlue.jpg'
import ModelOlive from '../assets/ModelOlive.jpg'
import ModelPink1 from '../assets/ModelPink.jpg'
import Taupe from '../assets/Taupe.jpg'

export default function Farhah() {
    return (<div div className={`container col-${12}`} >
       <CardDeck>
                <Card>
                    <Card.Img variant="top" src={BabyBlue} />
                    <Card.Body>
                        <Card.Title>Farhah Khimar - Baby Blue</Card.Title>
                        <Card.Text>
                            Baby Doll HQ
      </Card.Text>
                        <Card.Text>  Two Layers</Card.Text>
                        <Card.Text>    IDR 100.000</Card.Text>
                        <ButtonOrder />
                    </Card.Body>
                    <Card.Footer onClick={() => console.log('hi')}>
                        <p className="text-muted">Stocks: 14</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ModelOlive} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: 19 }}>Farhah Khimar - Olive Green</Card.Title>
                        <Card.Text>
                            Baby Doll HQ
                    </Card.Text>
                        <Card.Text>Two Layers</Card.Text>
                        <Card.Text>    IDR 100.000</Card.Text>
                        <ButtonOrder />
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-muted">Stocks: 1</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ModelPink1} />
                    <Card.Body>
                        <Card.Title>Farhah Khimar - Candy Pink</Card.Title>
                        <Card.Text>
                            Baby Doll HQ
                    </Card.Text>
                        <Card.Text>  Two Layers</Card.Text>
                        <Card.Text>    IDR 100.000</Card.Text>
                        <ButtonOrder />
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-muted">Stocks: 14</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Taupe} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: 17 }}>Farhah Khimar - Light Taupe</Card.Title>
                        <Card.Text>
                            Baby Doll HQ
                    </Card.Text>
                        <Card.Text>  Two Layers</Card.Text>
                        <Card.Text>    IDR 100.000</Card.Text>
                        <ButtonOrder />
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-muted">Stocks: 0</p>
                    </Card.Footer>
                </Card>


            </CardDeck>
    </div >
    )
}