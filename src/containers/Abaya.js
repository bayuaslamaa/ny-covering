import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Card'
import Abaya1 from '../assets/Abaya1.jpg'
import Abaya2 from '../assets/Abaya2.jpg'
import Abaya3 from '../assets/Abaya3.jpg'
import { CardDeck, Card, Button } from 'react-bootstrap'


export default function Abaya() {
    const orderNow = () => {
        console.log('hii')
    }
    return (<div div className="container col-9" >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={Abaya1} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 18 }}>Misha Abaya - Nude Mocca</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                    <Button onClick={orderNow}>Order Now</Button>
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
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                    <Button onClick={orderNow}>Order Now</Button>
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
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
               </Card.Text>
                    <Button onClick={orderNow}>Order Now</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer>
            </Card>

        </CardDeck>

    </div >
    )
}