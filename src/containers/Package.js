import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import { CardDeck, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ButtonOrder from '../components/ButtonCart'


export default () => {
    useEffect(()=>{
        ReactPixel.init("614220549496198")
        ReactPixel.track("ViewContent")
      }, [])
    const item10 = useSelector(state => state.items[9].img)
    const item11 = useSelector(state => state.items[10].img)
    const item12 = useSelector(state => state.items[11].img)
    return (
        <div div className="container col-9" >
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={item10} />
                    <Card.Body>
                        <Card.Title>Misha Set - Mocca Nude</Card.Title>
                        <Card.Text>
                        (Gamis & khimar free cadar tali)
      </Card.Text>
                        <Card.Text>
                           IDR 250.000
      </Card.Text>
                        <ButtonOrder id={10} />
                    </Card.Body>
                    <Card.Footer >
                        <p className="text-muted">Stocks: 20</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={item11} />
                    <Card.Body>
                    <Card.Title>Misha Set - Dusty Pink Vanilla</Card.Title>
                        <Card.Text>
                        (Gamis & khimar free cadar tali)
      </Card.Text>
                        <Card.Text>
                           IDR 250.000
      </Card.Text>
                        <ButtonOrder id={11} />
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-muted">Stocks: 20</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={item12} />
                    <Card.Body>
                    <Card.Title>Misha Set - Nude Mocca</Card.Title>
                        <Card.Text>
                        (Gamis & khimar free cadar tali)
      </Card.Text>
                        <Card.Text>
                           IDR 250.000
      </Card.Text>
                        <ButtonOrder id={12}/>
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-muted">Stocks: 20</p>
                    </Card.Footer>
                </Card>


            </CardDeck>

        </div >
    )
}