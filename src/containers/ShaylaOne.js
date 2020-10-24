import React, {useEffect} from 'react'
import ReactPixel from 'react-facebook-pixel'
import {envi} from "../config"
import {useSelector} from 'react-redux'
import { CardDeck, Card, Badge} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 
import { useHistory } from 'react-router-dom'

export default function ShaylaOne() {
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
    const item32 = useSelector(state => state.items[31])
    const item33 = useSelector(state => state.items[32])
    const item34 = useSelector(state => state.items[33])
    const item35 = useSelector(state => state.items[34])
    return (<div  className={`container col-sm-${12}`} >
        <CardDeck>
                    
                    <Card onClick={() => pushToItem(32)}>
                        <Card.Img variant="top" src={item32.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item32.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Bisa dipakai untuk acara pernikahan, wisuda, dan walimahan kamu.</Card.Text>
                            <Card.Text>Warna-warnanya cantik ♥️</Card.Text>
                            <Card.Text>Berbahan Baby Doll Armany dengan handfeel terbaik.</Card.Text>
                            <Card.Text>Busui friendly (ada resleting di dada)
Berlayer-layer dan full furing.</Card.Text>
                            <Card.Text>Bisa dibayangin brp meter bahan yg dipakai kira-kira?</Card.Text>
                            <Card.Text>Tali di pinggang, jd tidak perlu takut kebesaran
Kancing di pergelangan tangan dengan rempel cantik & manis!</Card.Text>
                            <Card.Text>Dilengkapi renda di bagian bawahnya jadi no worry kalau pakai khimar panjang akan tetap ON point karena khimarnya tidak akan menutupi dress kamu 😍</Card.Text>
                            <Card.Text>Ukuran :
ALL SIZE!</Card.Text>
                            <Card.Text>
LD up to 114 cm PB 140 cm</Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={32} />
                        </Card.Body>
                    </Card>
                    <Card onClick={() => pushToItem(33)}>
                        <Card.Img variant="top" src={item33.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item33.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Bisa dipakai untuk acara pernikahan, wisuda, dan walimahan kamu.</Card.Text>
                            <Card.Text>Warna-warnanya cantik ♥️</Card.Text>
                            <Card.Text>Berbahan Baby Doll Armany dengan handfeel terbaik.</Card.Text>
                            <Card.Text>Busui friendly (ada resleting di dada)
Berlayer-layer dan full furing.</Card.Text>
                            <Card.Text>Bisa dibayangin brp meter bahan yg dipakai kira-kira?</Card.Text>
                            <Card.Text>Tali di pinggang, jd tidak perlu takut kebesaran
Kancing di pergelangan tangan dengan rempel cantik & manis!</Card.Text>
                            <Card.Text>Dilengkapi renda di bagian bawahnya jadi no worry kalau pakai khimar panjang akan tetap ON point karena khimarnya tidak akan menutupi dress kamu 😍</Card.Text>
                            <Card.Text>Ukuran :
ALL SIZE!</Card.Text>
                            <Card.Text>
LD up to 114 cm PB 140 cm</Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={33} />
                        </Card.Body>
                    </Card>
                    <Card onClick={() => pushToItem(34)}>
                        <Card.Img variant="top" src={item34.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item34.name} <Badge pill variant="warning">New</Badge></Card.Title>
                            <Card.Text>Bisa dipakai untuk acara pernikahan, wisuda, dan walimahan kamu.</Card.Text>
                            <Card.Text>Warna-warnanya cantik ♥️</Card.Text>
                            <Card.Text>Berbahan Baby Doll Armany dengan handfeel terbaik.</Card.Text>
                            <Card.Text>Busui friendly (ada resleting di dada)
Berlayer-layer dan full furing.</Card.Text>
                            <Card.Text>Bisa dibayangin brp meter bahan yg dipakai kira-kira?</Card.Text>
                            <Card.Text>Tali di pinggang, jd tidak perlu takut kebesaran
Kancing di pergelangan tangan dengan rempel cantik & manis!</Card.Text>
                            <Card.Text>Dilengkapi renda di bagian bawahnya jadi no worry kalau pakai khimar panjang akan tetap ON point karena khimarnya tidak akan menutupi dress kamu 😍</Card.Text>
                            <Card.Text>Ukuran :
ALL SIZE!</Card.Text>
                            <Card.Text>
LD up to 114 cm PB 140 cm</Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={34} />
                        </Card.Body>
                    </Card>
                    <Card onClick={() => pushToItem(35)}>
                        <Card.Img variant="top" src={item35.img}  />
                        <Card.Body>
                            <Card.Title  style={{fontWeight: 600}}>{item35.name} <Badge pill variant="secondary">Sold Out</Badge></Card.Title>
                            <Card.Text>Bisa dipakai untuk acara pernikahan, wisuda, dan walimahan kamu.</Card.Text>
                            <Card.Text>Warna-warnanya cantik ♥️</Card.Text>
                            <Card.Text>Berbahan Baby Doll Armany dengan handfeel terbaik.</Card.Text>
                            <Card.Text>Busui friendly (ada resleting di dada)
Berlayer-layer dan full furing.</Card.Text>
                            <Card.Text>Bisa dibayangin brp meter bahan yg dipakai kira-kira?</Card.Text>
                            <Card.Text>Tali di pinggang, jd tidak perlu takut kebesaran
Kancing di pergelangan tangan dengan rempel cantik & manis!</Card.Text>
                            <Card.Text>Dilengkapi renda di bagian bawahnya jadi no worry kalau pakai khimar panjang akan tetap ON point karena khimarnya tidak akan menutupi dress kamu 😍</Card.Text>
                            <Card.Text>Ukuran :
ALL SIZE!</Card.Text>
                            <Card.Text>
LD up to 114 cm PB 140 cm</Card.Text>
                           
                            
                            <Card.Text>    IDR 190,000</Card.Text>
                            <ButtonAddCart id={35} />

                    <Card.Footer >
                        <p className="text-muted">Stocks: 0 (Restock Soon)</p>
                    </Card.Footer>
                        </Card.Body>
                    </Card>
                
                </CardDeck>
    </div >
    )
}