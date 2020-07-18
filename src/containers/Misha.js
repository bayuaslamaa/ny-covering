import React from 'react'
import { CardDeck, Card} from 'react-bootstrap'
import ButtonOrder from '../components/ButtonOrder'
import OatVanilla from '../assets/OatVanilla.jpg'
import Nude from '../assets/Nude.jpg'
import Coffee from '../assets/Coffee.jpg'

export default function Misha() {
    return (<div div className={`container col-${9}`} >
        <CardDeck>
                    
                    <Card>
                        <Card.Img variant="top" src={Nude}  />
                        <Card.Body>
                            <Card.Title>Misha Khimar - Nude</Card.Title>
                            <Card.Text>
                                Arabian Crepe HQ
                    </Card.Text>
                            <Card.Text>  Pet Antem & Kokoh</Card.Text>
                            <Card.Text>    IDR 80.000</Card.Text>
                            <ButtonOrder />
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-muted">Stocks: 50</p>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={OatVanilla} />
                        <Card.Body>
                            <Card.Title>Misha Khimar - Oat Vanilla</Card.Title>
                            <Card.Text>
                                Arabian Crepe HQ
                </Card.Text>
                <Card.Text>  Pet Antem & Kokoh</Card.Text>
                            <Card.Text>    IDR 80.000</Card.Text>
                            <ButtonOrder />
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-muted">Stocks: 20</p>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Coffee}  />
                        <Card.Body>
                            <Card.Title>Misha Khimar - Coffee</Card.Title>
                            <Card.Text>
                                Arabian Crepe HQ
                    </Card.Text>
                            <Card.Text>  Pet Antem & Kokoh</Card.Text>
                            <Card.Text>    IDR 80.000</Card.Text>
                            <ButtonOrder />
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-muted">Stocks: 30</p>
                        </Card.Footer>
                    </Card>


                </CardDeck>
    </div >
    )
}