import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import { CardDeck, Card, Badge} from 'react-bootstrap'
import ButtonOrder from '../components/ButtonCart'
import {useSelector} from 'react-redux'
import { envi } from '../config'




export default function Zara() {
    useEffect(() => {
        if(envi === "production"){
            ReactPixel.init("614220549496198")
            ReactPixel.track("ViewContent")
        }
        
      }, [])
    const item13 = useSelector(state => state.items[12])
    const item14 = useSelector(state => state.items[13])
    const item15 = useSelector(state => state.items[14])
    const item16 = useSelector(state => state.items[15])
    const item17 = useSelector(state => state.items[16])


    return (<><div className="container col-sm-9" >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={item13.img} />
                <Card.Body>
                <Card.Title style={{ fontSize: 18 }}>{item13.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame Sexy combined Pretty Jasmine/Madame Queen/Humaira (kain ala Timur Tengah, masalah kualitas gausah ditanya ya) </Card.Text> 
                <Card.Text>SUPERRRRR DUPER NYAMAN & PREMIUM!</Card.Text> 

                  <Card.Text>Resleting belakang a.k.a TIDAK busui friendly.</Card.Text>
                  <Card.Text>Aksen di tangan longgar dengan lipatan yang cool, dilengkapi manset cincin di pergelangannya jadi ga gampang merosot sehingga aurat kita insyaaAllah aman.
</Card.Text>



                <Card.Text>READY STOCK</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={13}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={item14.img} />
                <Card.Body>
                 
                <Card.Title style={{ fontSize: 18 }}>{item14.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame Sexy combined Pretty Jasmine/Madame Queen/Humaira (kain ala Timur Tengah, masalah kualitas gausah ditanya ya) </Card.Text> 
                <Card.Text>SUPERRRRR DUPER NYAMAN & PREMIUM!</Card.Text> 

                  <Card.Text>Resleting belakang a.k.a TIDAK busui friendly.</Card.Text>
                  <Card.Text>Aksen di tangan longgar dengan lipatan yang cool, dilengkapi manset cincin di pergelangannya jadi ga gampang merosot sehingga aurat kita insyaaAllah aman.
</Card.Text>



                <Card.Text>READY STOCK</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={14}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={item15.img} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 18 }}>{item15.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                            <Card.Text>Matt : Madame Sexy combined Pretty Jasmine/Madame Queen/Humaira (kain ala Timur Tengah, masalah kualitas gausah ditanya ya) </Card.Text> 
                            <Card.Text>SUPERRRRR DUPER NYAMAN & PREMIUM!</Card.Text> 

                              <Card.Text>Resleting belakang a.k.a TIDAK busui friendly.</Card.Text>
                              <Card.Text>Aksen di tangan longgar dengan lipatan yang cool, dilengkapi manset cincin di pergelangannya jadi ga gampang merosot sehingga aurat kita insyaaAllah aman.
</Card.Text>



                            <Card.Text>READY STOCK</Card.Text>
                            <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                            <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                            <Card.Text>    IDR 229.000</Card.Text>
                   <ButtonOrder id={15}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
           

        </CardDeck>
        

    </div >
    <div className="container col-sm-6" style={{marginTop: 30}}>
        <CardDeck>
        <Card>
                <Card.Img variant="top" src={item16.img} />
                <Card.Body>
                <Card.Title style={{ fontSize: 18 }}>{item16.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame Sexy combined Pretty Jasmine/Madame Queen/Humaira (kain ala Timur Tengah, masalah kualitas gausah ditanya ya) </Card.Text> 
                <Card.Text>SUPERRRRR DUPER NYAMAN & PREMIUM!</Card.Text> 

                  <Card.Text>Resleting belakang a.k.a TIDAK busui friendly.</Card.Text>
                  <Card.Text>Aksen di tangan longgar dengan lipatan yang cool, dilengkapi manset cincin di pergelangannya jadi ga gampang merosot sehingga aurat kita insyaaAllah aman.
</Card.Text>



                <Card.Text>READY STOCK</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={16}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            <Card>
                <Card.Img variant="top" src={item17.img} />
                <Card.Body>
                 
                <Card.Title style={{ fontSize: 18 }}>{item17.name} <Badge pill variant="warning">New</Badge></Card.Title>
                
                <Card.Text>Matt : Madame Sexy combined Pretty Jasmine/Madame Queen/Humaira (kain ala Timur Tengah, masalah kualitas gausah ditanya ya) </Card.Text> 
                <Card.Text>SUPERRRRR DUPER NYAMAN & PREMIUM!</Card.Text> 

                  <Card.Text>Resleting belakang a.k.a TIDAK busui friendly.</Card.Text>
                  <Card.Text>Aksen di tangan longgar dengan lipatan yang cool, dilengkapi manset cincin di pergelangannya jadi ga gampang merosot sehingga aurat kita insyaaAllah aman.
</Card.Text>



                <Card.Text>READY STOCK</Card.Text>
                <Card.Text>Size L LD 110 cm dan PB 140 cm</Card.Text>
                <Card.Text>Size M LD 100 cm & PB 134 cm</Card.Text>
                <Card.Text>    IDR 229.000</Card.Text>
                    <ButtonOrder id={17}/>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Stocks: 20</small>
                </Card.Footer> */}
            </Card>
            
        </CardDeck>
    </div></>
    )
}