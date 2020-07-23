import React from 'react'
import { useSelector} from 'react-redux'
import { CardDeck, Card} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 


export default function Farhah() {
    const item1 = useSelector(state => state.items[0])
    const item2 = useSelector(state => state.items[1])
    const item3 = useSelector(state => state.items[2])
   
    return (<div className={`container col-${9}`} >
       <CardDeck>
                <Card>
                    <Card.Img variant="top" src={item1.img} />
                    <Card.Body>
                        <Card.Title style={{fontWeight: 600}}>Farhah Khimar - Baby Blue</Card.Title>
                        <Card.Text>
                            Baby Doll HQ
      </Card.Text>
                        <Card.Text>  Two Layers</Card.Text>
                        <Card.Text>    IDR 100.000</Card.Text>
                        <ButtonAddCart id={1}/>
                    </Card.Body>
                    <Card.Footer >
                        <p className="text-muted">Stocks: 14</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={item2.img} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: 19, fontWeight: 600 }}>Farhah Khimar - Olive Green</Card.Title>
                        <Card.Text>
                            Baby Doll HQ
                    </Card.Text>
                        <Card.Text>Two Layers</Card.Text>
                        <Card.Text>    IDR 100.000</Card.Text>
                        {/* <ButtonOrder /> */}
                        <ButtonAddCart id={2}/>
                    </Card.Body>
                    <Card.Footer >
                        <p className="text-muted">Stocks: 1</p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={item3.img} />
                    <Card.Body>
                        <Card.Title style={{fontWeight: 600}}>Farhah Khimar - Candy Pink</Card.Title>
                        <Card.Text>
                            Baby Doll HQ
                    </Card.Text>
                        <Card.Text>  Two Layers</Card.Text>
                        <Card.Text>    IDR 100.000</Card.Text>
                        {/* <ButtonOrder /> */}
                        <ButtonAddCart id={3}/>
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-muted">Stocks: 14</p>
                    </Card.Footer>
                </Card>
                

            </CardDeck>
    </div >
    )
}