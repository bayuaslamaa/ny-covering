import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Card'
import Khimar1 from '../assets/Khimar1.png'
import Khimar2 from '../assets/Khimar2.jpg'
import { CardDeck, Card, Button } from 'react-bootstrap'
import ButtonOrder from '../components/ButtonOrder'


export default function Khimar() {
    const khimar = useSelector(state => state.khimar)
    const orderNow = () => {
        console.log('hii')
    }
    return (<div div className="container col-12" >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={Khimar1} />
                <Card.Body>
                    <Card.Title>Khimar 1</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                    <ButtonOrder />
                </Card.Body>
                <Card.Footer onClick={() => console.log('hi')}>
                    <p className="text-muted">Stocks: 20</p>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Khimar2} />
                <Card.Body>
                    <Card.Title>Khimar2</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                    <ButtonOrder />
                </Card.Body>
                <Card.Footer>
                    <p className="text-muted">Stocks: 20</p>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.imgur.com/k7jNLIq.png" />
                <Card.Body>
                    <Card.Title>Khimar (Olive)</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
               </Card.Text>
                    <ButtonOrder />
                </Card.Body>
                <Card.Footer>
                    <p className="text-muted">Stocks: 20</p>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.imgur.com/ngcAtRp.png" />
                <Card.Body>
                    <Card.Title>Khimar (Candy Pink)</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                     </Card.Text>
                    <ButtonOrder />
                </Card.Body>
                <Card.Footer>
                    <p className="text-muted">Stocks: 20</p>
                </Card.Footer>
            </Card>

        </CardDeck>
        <CardDeck className="col-6">
            <Card>
                <Card.Img variant="top" src="https://i.imgur.com/wpgMY3v.png" />
                <Card.Body>
                    <Card.Title>Baby Blue</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                </Card.Text>
                    <ButtonOrder />
                </Card.Body>
                <Card.Footer>
                    <p className="text-muted">Stocks: 20</p>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.imgur.com/uCT0LW7.png" />
                <Card.Body>
                    <Card.Title>Light Taupe</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                    <ButtonOrder />
                </Card.Body>
                <Card.Footer>
                    <p className="text-muted">Stocks: 20</p>
                </Card.Footer>
            </Card>


        </CardDeck>
    </div >
    )
}