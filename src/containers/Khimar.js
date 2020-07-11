import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Card'
import Khimar1 from '../assets/Khimar1.png'
import Khimar2 from '../assets/Khimar2.jpg'
import { CardDeck, Card, Button } from 'react-bootstrap'
import ButtonOrder from '../components/ButtonOrder'
import ModelBlue1 from '../assets/ModelBlue1.jpg'
import ModelOlive1 from '../assets/ModelOlive1.jpg'
import ModelPink1 from '../assets/ModelPink1.jpg'
import OatVanilla from '../assets/OatVanilla.png'
import Nude from '../assets/Nude.png'
import Coffee from '../assets/Coffee.png'

export default function Khimar(props) {
    const { misha } = props
    const khimar = useSelector(state => state.khimar)
    const orderNow = () => {
        console.log('hii')
    }
    return (<div div className={`container col-${misha?12:9}`} >
        {
            misha ? (<CardDeck>
                <Card>
                    <Card.Img variant="top" src={ModelBlue1} />
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
                        <p className="text-muted">Stocks: 20</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ModelOlive1} />
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
                        <p className="text-muted">Stocks: 20</p>
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
                        <p className="text-muted">Stocks: 20</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.imgur.com/uCT0LW7.png" />
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
                        <p className="text-muted">Stocks: 20</p>
                    </Card.Footer>
                </Card>


            </CardDeck>) :
                (<CardDeck>
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
                        <Card.Img variant="top" src={Nude} style={{ height: "42%" }} />
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
                            <p className="text-muted">Stocks: 20</p>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Coffee} style={{ height: "42%" }} />
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
                            <p className="text-muted">Stocks: 20</p>
                        </Card.Footer>
                    </Card>


                </CardDeck>)
        }
    </div >
    )
}