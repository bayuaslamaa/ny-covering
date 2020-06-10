import React, { useState } from 'react'
import Khimar1 from '../assets/Khimar1.png'
import Khimar2 from '../assets/Khimar2.jpg'
import { CardDeck, Card, Button } from 'react-bootstrap'
import ButtonOrder from '../components/ButtonOrder'

export default () => {
    return (
        <div div className="container col-9" >
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="https://i.imgur.com/GiHiRYr.jpg" />
                    <Card.Body>
                        <Card.Title>Package 1</Card.Title>
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
                    <Card.Img variant="top" src="https://i.imgur.com/54PkCdU.jpg" />
                    <Card.Body>
                        <Card.Title>Package 2</Card.Title>
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
                    <Card.Img variant="top" src="https://i.imgur.com/GKJ5Nt6.jpg" />
                    <Card.Body>
                        <Card.Title>Package 3</Card.Title>
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


            </CardDeck>

        </div >
    )
}