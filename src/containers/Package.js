import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'
import ButtonOrder from '../components/ButtonOrder'
import setMoccaNude from '../assets/SetMoccaNude.jpg'
import setNudeMocca from '../assets/setNudeMocca.jpg'
import setDustyPink from '../assets/setDustyPink.jpg'


export default () => {
    return (
        <div div className="container col-9" >
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={setMoccaNude} />
                    <Card.Body>
                        <Card.Title>Misha Set - Mocca Nude</Card.Title>
                        <Card.Text>
                        (Gamis & khimar free cadar tali)
      </Card.Text>
                        <Card.Text>
                           IDR 230.000
      </Card.Text>
                        <ButtonOrder />
                    </Card.Body>
                    <Card.Footer onClick={() => console.log('hi')}>
                        <p className="text-muted">Stocks: 20</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={setDustyPink} />
                    <Card.Body>
                    <Card.Title>Misha Set - Dusty Pink Vanilla</Card.Title>
                        <Card.Text>
                        (Gamis & khimar free cadar tali)
      </Card.Text>
                        <Card.Text>
                           IDR 230.000
      </Card.Text>
                        <ButtonOrder />
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-muted">Stocks: 20</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={setNudeMocca} />
                    <Card.Body>
                    <Card.Title>Misha Set - Nude Mocca</Card.Title>
                        <Card.Text>
                        (Gamis & khimar free cadar tali)
      </Card.Text>
                        <Card.Text>
                           IDR 230.000
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