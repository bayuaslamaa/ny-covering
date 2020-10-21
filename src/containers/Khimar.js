import React, {useEffect} from 'react'
import {envi} from "../config"
import ReactPixel from 'react-facebook-pixel'
import { useSelector} from 'react-redux'
import { CardDeck, Card, Badge} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 
import { useHistory } from 'react-router-dom'


export default function Farhah() {
    useEffect(()=>{    
        if (envi === "production") {
            ReactPixel.init("614220549496198")
            ReactPixel.track("ViewContent")
        }
      }, [])
    const history = useHistory()
    const item1 = useSelector(state => state.items[0])
    const item2 = useSelector(state => state.items[1])
    const item3 = useSelector(state => state.items[2])
    const item26 = useSelector(state => state.items[25])
    const item27 = useSelector(state => state.items[26])
    // const state = useSelector(state => state)
   
    return (<><div className={`container col-sm-${9}`} >
       <CardDeck>
                <Card onClick={() => history.push(`/item/${1}`)}>
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
                    {/* <Card.Footer >
                        <p className="text-muted">Stocks: 14</p>
                    </Card.Footer> */}
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
                        <p className="text-muted">Stocks: 0 (Restock Soon)</p>
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
                    {/* <Card.Footer>
                        <p className="text-muted">Stocks: 14</p>
                    </Card.Footer> */}
                </Card>
                

            </CardDeck>
    </div ><div className={`container col-sm-${6}`} style={{marginTop: 30}}>
       <CardDeck>
                <Card>
                    <Card.Img variant="top" src={item26.img} />
                    <Card.Body>
                        <Card.Title style={{fontWeight: 600}}>{item26.name} <Badge pill variant="warning">New</Badge></Card.Title>
                        <Card.Text>
                            Baby Doll HQ
      </Card.Text>
                        <Card.Text>  Two Layers</Card.Text>
                        <Card.Text>Size M</Card.Text>
                        <Card.Text>    IDR 100.000</Card.Text>
                        <ButtonAddCart id={26}/>
                    </Card.Body>
                    {/* <Card.Footer >
                        <p className="text-muted">Stocks: 14</p>
                    </Card.Footer> */}
                </Card>
                <Card>
                    <Card.Img variant="top" src={item27.img} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: 19, fontWeight: 600 }}>{item27.name} <Badge pill variant="warning">New</Badge></Card.Title>
                        <Card.Text>
                            Baby Doll HQ
                    </Card.Text>
                        <Card.Text>Two Layers</Card.Text>
                        <Card.Text>Size L</Card.Text>
                        <Card.Text>    IDR 150.000</Card.Text>
                        {/* <ButtonOrder /> */}
                        <ButtonAddCart id={27}/>
                    </Card.Body>
                    {/* <Card.Footer >
                        <p className="text-muted">Stocks: 0 (Restock Soon)</p>
                    </Card.Footer> */}
                </Card>
             

            </CardDeck>
    </div ></>
    )
}