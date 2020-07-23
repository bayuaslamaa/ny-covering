import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default ({name, address, phone}) => {
    const addedItems = useSelector(state => state.addedItems)
    const list = () =>  addedItems.map(item => {
       return item.quantity + " " +item.name + "\n"
    })
    return (
        <a style={{ color: 'white' }} href={`https://wa.me/6282320001876?text=Assalamualaikum wa rahmatullah wa barakatuh NY.Covering...%0A Saya mau order kak%0A%0AIni data dan pesanan saya kak: (mohon dicek kembali)%0ANama: ${name} %0AAlamat Lengkap: ${address} %0ANo. HP: ${phone}%0AOrder:%0A${list()}%0A`}>
            <Button variant="light" style={{backgroundColor:"#9C7A76", color: "white"}}>Konfirmasi dan Cek Ongkir</Button></a>
    )

}