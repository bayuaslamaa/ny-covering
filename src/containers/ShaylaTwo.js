import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import {envi} from "../config"
import {useSelector} from 'react-redux'
import { CardDeck, Card, Badge} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 
import { useHistory } from 'react-router-dom'

export default function ShaylaTwo() {
    const history = useHistory()
    const pushToItem = (itemId) => {
        history.push('/item/' + itemId)
    }
    useEffect(()=>{
        if(envi === "production") {
            ReactPixel.init("614220549496198")
            ReactPixel.track("ViewContent")
        }
      }, [])
    const item36 = useSelector(state => state.items[35])
    const item37 = useSelector(state => state.items[36])
    return (<div  className={`container col-sm-${6}`} >
        <CardDeck>
                    
                    <Card onClick={() => pushToItem(36)}>
                        <Card.Img variant="top" src={item36.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item36.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>• Berbahan Baby Doll Armany dengan handfeel terbaik</Card.Text>
                            <Card.Text>• Busui friendly (ada resleting di dada)</Card.Text>
                            <Card.Text>• Berlayer-layer dan full furing.</Card.Text>
                            <Card.Text>• Ada tali di pinggang jd tidak perlu takut kebesaran</Card.Text>
                            <Card.Text>• Kancing di pergelangan tangan yang sederhana tapi manis!</Card.Text>
                            <Card.Text>• Dilengkapi renda bunga & motif lipit di bagian bawahnya sehingga no worries kalau kamu suka pakai khimar panjang, dress ini akan tetap ON point karena khimarnya tidak akan menutupi dress cantik ini 😍
</Card.Text>
                            <Card.Text>ALL SIZE!</Card.Text>
                            <Card.Text>LD up to 110 cm PB 140 cm</Card.Text>
                      
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={36} />
                            <Card.Footer >
                        <p className="text-muted">Stocks: 0 (Restock Soon)</p>
                    </Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card onClick={() => pushToItem(37)}>
                        <Card.Img variant="top" src={item37.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item37.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>• Berbahan Baby Doll Armany dengan handfeel terbaik</Card.Text>
                            <Card.Text>• Busui friendly (ada resleting di dada)</Card.Text>
                            <Card.Text>• Berlayer-layer dan full furing.</Card.Text>
                            <Card.Text>• Ada tali di pinggang jd tidak perlu takut kebesaran</Card.Text>
                            <Card.Text>• Kancing di pergelangan tangan yang sederhana tapi manis!</Card.Text>
                            <Card.Text>• Dilengkapi renda bunga & motif lipit di bagian bawahnya sehingga no worries kalau kamu suka pakai khimar panjang, dress ini akan tetap ON point karena khimarnya tidak akan menutupi dress cantik ini 😍
</Card.Text>
                            <Card.Text>ALL SIZE!</Card.Text>
                            <Card.Text>LD up to 110 cm PB 140 cm</Card.Text>
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={37} />
                            <Card.Footer >
                        <p className="text-muted">Stocks: 0 (Restock Soon)</p>
                    </Card.Footer>
                        </Card.Body>
                    </Card>
             
                
                </CardDeck>
    </div >
    )
}