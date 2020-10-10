import React, {useEffect, useState} from 'react'
import ReactPixel from 'react-facebook-pixel'
import { useSelector } from 'react-redux'
import { Card, Button , CardDeck} from 'react-bootstrap'
import ButtonOrder from '../components/ButtonOrder' 
import { MDBIcon } from 'mdbreact'
import {envi} from "../config"


export default () => {
  const total = useSelector(state => state.total)
  useEffect(()=>{
        if(envi === "production") {
        ReactPixel.init("614220549496198")
        ReactPixel.track("Purchase", {
          value: total.toFixed(2),
          currency: 'IDR'
        })
       }
  }, [total])
    const addedItems = useSelector(state => state.addedItems)
    const [isConfirmed, confirm] = useState(false)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    return(
        <div className="container col-sm-12">
            {
                addedItems.length ? ( <CardDeck style={{width: "80%", marginRight: "10%", marginLeft: "10%", marginBottom: "15%", marginTop: 0}}>
                {
                    !isConfirmed ? ( <Card>
                        <Card.Header style={{fontSize:25}}>KONFIRMASI PESANAN</Card.Header>
                        <Card.Body>
                          <Card.Title>Pesanan Kamu:</Card.Title>
                          {
                              addedItems.map(item => {
                              return(<Card.Text>{item.quantity}pcs {item.name}</Card.Text>)
                              })
                          }
                          <Card.Text>
                          <b>Total: IDR {total}</b> (belum termasuk ongkir)
                          </Card.Text>
                          <Card.Text>Untuk pengiriman dan cek ongkir</Card.Text>
                          <Card.Text>Silakan lengkapi datamu dulu ya <MDBIcon far icon="grin-alt" /></Card.Text>
                          <Button variant="light" style={{backgroundColor:"#9C7A76", color: "white"}} onClick={() => confirm(true)}>Lengkapi</Button>
                          {/* <ButtonOrder/> */}
                        </Card.Body>
                      </Card>) : (
                    <form>
                    <div class="form-group">
                      <label for="name">Nama Lengkap</label>
                      <input type="text" class="form-control"  placeholder="Isi nama lengkapmu disini ..."  onChange={e => setName(e.target.value)}/>
      
                    </div>
                    <div class="form-group">
                      <label >Alamat Lengkap</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Isi alamat lengkapmu disini ..." onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div class="form-group">
                      <label >Nomor Handphone</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Isi nomormu yang bisa dihubungi  ..."  onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <ButtonOrder name={name} address={address} phone={phone}/>
                  </form>)
                }
                   </CardDeck>) : <><h1>TIDAK ADA PESANAN</h1></>
            }
           
             </div>
    )
}