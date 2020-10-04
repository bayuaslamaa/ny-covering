import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import { CardDeck, Card , Badge} from 'react-bootstrap'
import ButtonOrder from '../components/ButtonCart'
import {useSelector} from 'react-redux'
import { envi } from '../config'




export default function ZaraBlack() {
    useEffect(()=>{
        if(envi === "production"){

        ReactPixel.init("614220549496198")
        ReactPixel.track("ViewContent")
        }
      }, [])
    const item18 = useSelector(state => state.items[17])
    const item19 = useSelector(state => state.items[18])
    const item20 = useSelector(state => state.items[19])
    const item21 = useSelector(state => state.items[20])
    const item22 = useSelector(state => state.items[21])
    const item23 = useSelector(state => state.items[22])
    const item24 = useSelector(state => state.items[23])
    const item25 = useSelector(state => state.items[24])


    return (<><div className="container col-9" >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={item18.img} />
                <Card.Body>
                <Card.Title style={{ fontSize: 18 }}>{item18.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame sexy combined with madame pretty/humairah/pretty jasmine (kualitas eksport Timur Tengah) </Card.Text> 
                <Card.Text>Super duper nyaman & premium.</Card.Text> 



                <Card.Text>Ready size M & L!</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={18}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={item19.img} />
                <Card.Body>
                 
                <Card.Title style={{ fontSize: 18 }}>{item19.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame sexy combined with madame pretty/humairah/pretty jasmine (kualitas eksport Timur Tengah) </Card.Text> 
                <Card.Text>Super duper nyaman & premium.</Card.Text> 



                <Card.Text>Ready size M & L!</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={19}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={item20.img} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 18 }}>{item20.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                            <Card.Text>Matt : Madame sexy combined with madame pretty/humairah/pretty jasmine (kualitas eksport Timur Tengah) </Card.Text> 
                <Card.Text>Super duper nyaman & premium.</Card.Text> 



                <Card.Text>Ready size M & L!</Card.Text>
                            <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                            <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                            <Card.Text>    IDR 229.000</Card.Text>
                   <ButtonOrder id={20}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
           

        </CardDeck>
        

    </div >
    <div className="container col-9" style={{marginTop: 30}}>
        <CardDeck>
        <Card>
                <Card.Img variant="top" src={item21.img} />
                <Card.Body>
                <Card.Title style={{ fontSize: 18 }}>{item21.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
               <Card.Text>Matt : Madame sexy combined with madame pretty/humairah/pretty jasmine (kualitas eksport Timur Tengah) </Card.Text> 
                <Card.Text>Super duper nyaman & premium.</Card.Text> 



                <Card.Text>Ready size M & L!</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={21}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={item22.img} />
                <Card.Body>
                 
                <Card.Title style={{ fontSize: 18 }}>{item22.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame sexy combined with madame pretty/humairah/pretty jasmine (kualitas eksport Timur Tengah) </Card.Text> 
                <Card.Text>Super duper nyaman & premium.</Card.Text> 



                <Card.Text>Ready size M & L!</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={22}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={item23.img} />
                <Card.Body>
                 
                <Card.Title style={{ fontSize: 18 }}>{item23.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame sexy combined with madame pretty/humairah/pretty jasmine (kualitas eksport Timur Tengah) </Card.Text> 
                <Card.Text>Super duper nyaman & premium.</Card.Text> 



                <Card.Text>Ready size M & L!</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={23}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            
        </CardDeck>
    </div>
    <div className="container col-6" style={{marginTop: 30}}>
        <CardDeck>
        <Card>
                <Card.Img variant="top" src={item24.img} />
                <Card.Body>
                <Card.Title style={{ fontSize: 18 }}>{item24.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
               <Card.Text>Matt : Madame sexy combined with madame pretty/humairah/pretty jasmine (kualitas eksport Timur Tengah) </Card.Text> 
                <Card.Text>Super duper nyaman & premium.</Card.Text> 



                <Card.Text>Ready size M & L!</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={24}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={item25.img} />
                <Card.Body>
                 
                <Card.Title style={{ fontSize: 18 }}>{item25.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame sexy combined with madame pretty/humairah/pretty jasmine (kualitas eksport Timur Tengah) </Card.Text> 
                <Card.Text>Super duper nyaman & premium.</Card.Text> 



                <Card.Text>Ready size M & L!</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={25}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            
        </CardDeck>
    </div>
    </>
    )
}