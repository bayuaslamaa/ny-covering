import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card , CardDeck} from 'react-bootstrap'
import ButtonAddCart from '../components/ButtonCart' 
import { envi } from '../config'
import ReactPixel from 'react-facebook-pixel'



export default function Item ({ match }) {
    
    const id = match.params.id
    const item = useSelector(state => state.items[id - 1])
    const separatedTitle = item.name.split("-")
    useEffect(()=>{
      if (envi === "production") {
          ReactPixel.init("614220549496198")
          ReactPixel.track("ViewContent")

      }
    }, [])
return(<>
    <div className="container col-sm-12" >
    <CardDeck >
    <Card style={{borderColor: "#9C7A76"}}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      {/* <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text> */}
    </Card.Body>
  </Card>
  <div className="col-sm-5">
  <Card style={{borderColor: "#9C7A76"}}>
  <Card.Body>
    <Card.Title style={{fontSize: 35}}>{separatedTitle[0]}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted" style={{fontSize: 30}}>{separatedTitle[1]}</Card.Subtitle>
    <Card.Title>Harga: {getPrice(item.price)}</Card.Title>
    <ButtonAddCart id={item.id}/>
  </Card.Body>
  </Card>
  <Card style={{borderColor: "#9C7A76"}}>
  <Card.Body>
    <Card.Title>Deskripsi Produk</Card.Title>
  {
    <Desc id={item.id}/>
  }
   </Card.Body>
  </Card>
  </div>
  </CardDeck>
  
  </div>
  
  </>)
}

const DescKhimar = () => {
  return(<>

    <Card.Text>
    Khimar favorite banyak orang, sudah SOLD ratusan pcs dlm sedikit variasi aja loh. Bayangkan kalau variasi warnanya banyak.
    </Card.Text>
    <Card.Text>
    Matt : Baby Doll High Quality & Baby Doll Original kualitas terbaik di pasaran
    </Card.Text>
    <Card.Text>
    Seratnya halus
    </Card.Text>
    <Card.Text>
    Lentur (stretch)
    </Card.Text>
    <Card.Text>
    Jatuh, nyaman dipakai di kulit dan tidak menerawang!
    </Card.Text>
    <Card.Text>
    2 layer
    </Card.Text>
    <Card.Text>
    Ada dua size saja.
    </Card.Text>
    <Card.Text>
    Size M: PD 67 cm (dr dagu), PB 105 cm 
    </Card.Text>
    <Card.Text>
    Size L: PD 90 cm (dr dagu), PB 120 cm 
    </Card.Text>
    <Card.Text>
    Ada pet & non pet.
    </Card.Text>
    <Card.Text>
    Menggunakan pet anti tembem ya.
    </Card.Text>
    <Card.Text>
    Cutting originally was made by us.
    </Card.Text>
 
  </>)
}

const Desc = ({id}) => {
  if ([1, 2, 3, 26, 27].includes(id)) {
    return <DescKhimar/>
  } else if ([4, 5, 6].includes(id)){
    return <DescMishaKhimar/>
  } else if ([7, 8, 9].includes(id)){
    return <DescMishaAbaya/>
  } else if([13, 14, 15, 16, 17].includes(id)){
    return <DescZara/>
  } else if([18, 19, 20, 21, 22, 23, 24, 25].includes(id)){
    return <DescZaraBlack/>
  } else if([28, 29, 30, 31].includes(id)){
    return <DescFarhahCadar/>
  } else if([32, 33, 34, 35].includes(id)){
    return <DescShaylaOne />
  } else if([36, 37].includes(id)){
    return <DescShaylaTwo />
  }
  
   else {
    return <></>
  }
}

const DescMishaKhimar = () => {
  return (<>
      <Card.Text>
      Material : ARABIAN CREPE HQ
    </Card.Text>
    <Card.Text>
    Pet antem (anti tembem) yg super enak dipakenya! 
    </Card.Text>
    <Card.Text>
    Cuttingannya bikin kurus dan ga ribet 😍
    </Card.Text>
    <Card.Text>
    Only ONE SIZE!
    </Card.Text>
    <Card.Text>
    Panjang depan dr DAGU +/- 70 cm
    </Card.Text>
    <Card.Text>
    Panjang belakang +/- 110 cm
    </Card.Text>
    <Card.Text>
    Only SUPER BEST DEAL!
    </Card.Text>
    <Card.Text>
    Niqab
        </Card.Text>
    <Card.Text>
    1 layer
    </Card.Text>
    <Card.Text>
Ada jahitan di hidung
    </Card.Text>
    
 

  </>)
}
const DescMishaAbaya = () => {
  return (<>
      <Card.Text>
      MISHA DRESS 
    </Card.Text>
    <Card.Text>
    Hanya DRESS SAJA!
    </Card.Text>
    <Card.Text>
    Dress semi-abaya yang bikin kamu keliatan langsing secara instan tapi ga nyeplak di badan!
    </Card.Text>
    <Card.Text>
    Bahan dress ini Arabian Crepe high quality, ga bikin gerah dan ringan banget dipakenya.
    </Card.Text>
    <Card.Text>
    Cuttingan A line ga bikin ribet sama sekali, cocok buat pengendara motor 😍
    </Card.Text>
    <Card.Text>
    Dress ini menggunakan zipper depan, cocok untuk busui.
    </Card.Text>
    <Card.Text>
    Kantongnya jg kanan kiri loh!
    </Card.Text>
    <Card.Text>
    Simple dan pas banget buat daily dress kamu 🤗
        </Card.Text>
    <Card.Text>
    Ukuran S: PB-133 cm, LD-94 cm
    </Card.Text>
    <Card.Text>
    Ukuran M: PB-136 cm, LD-96 cm
        </Card.Text>
    
 

  </>)
}

const DescZara = () => {
  return (<>
     <Card.Subtitle>COLOR SERIES</Card.Subtitle>
    <Card.Text>
    Alhamdulillah abaya terbaru kami. Bahan premium, desain exclusive.
    </Card.Text>
    <Card.Text>
    Matt : Madame Sexy combined Pretty Jasmine/Madame Queen/Humaira (kain ala Timur Tengah, masalah kualitas gausah ditanya ya) SUPERRRRR DUPER NYAMAN & PREMIUM!
    </Card.Text>
    <Card.Text>
    Resleting belakang a.k.a TIDAK busui friendly.
    </Card.Text>
    <Card.Text>
    Aksen di tangan longgar dengan lipatan yang cool, dilengkapi manset cincin di pergelangannya jadi ga gampang merosot sehingga aurat kita insyaaAllah aman.
    </Card.Text>
    <Card.Text>
    Abaya ini warnanya elegan banget, mix & match dengan hijab favorit kamu.
    </Card.Text>
    <Card.Text>
    Ready size M & L
    </Card.Text>
    <Card.Text>
    Size M: LD 100 cm & PB 134 cm
        </Card.Text>
    <Card.Text>
    Size L: LD 110 cm dan PB 140 cm
    </Card.Text>
    
 

  </>)
}
const DescZaraBlack = () => {
  return (<>
     <Card.Subtitle>BLACK SERIES</Card.Subtitle>
    <Card.Text>
    Alhamdulillah abaya terbaru kami. Bahan premium, desain exclusive.
    </Card.Text>
    <Card.Text>
    Matt : Madame Sexy combined Pretty Jasmine/Madame Queen/Humaira (kain ala Timur Tengah, masalah kualitas gausah ditanya ya) SUPERRRRR DUPER NYAMAN & PREMIUM!
    </Card.Text>
    <Card.Text>
    Resleting belakang a.k.a TIDAK busui friendly.
    </Card.Text>
    <Card.Text>
    Aksen di tangan longgar dengan lipatan yang cool, dilengkapi manset cincin di pergelangannya jadi ga gampang merosot sehingga aurat kita insyaaAllah aman.
    </Card.Text>
    <Card.Text>
    Abaya ini warnanya elegan banget, mix & match dengan hijab favorit kamu.
    </Card.Text>
    <Card.Text>
    Ready size M & L
    </Card.Text>
    <Card.Text>
    Size M: LD 100 cm & PB 134 cm
        </Card.Text>
    <Card.Text>
    Size L: LD 110 cm dan PB 140 cm
    </Card.Text>
    
 

  </>)
}
const DescFarhahCadar = () => {
  return (<>
    <Card.Text>
    Matt : Babydoll HQ
    </Card.Text>
    <Card.Text>
    Kenapa premium?
    </Card.Text>
    <Card.Text>
    Jahit tepi butik bukan neci atau obras
    </Card.Text>
    <Card.Text>
    Double layer sehingga tidak menerawang
    </Card.Text>
    <Card.Text>
    Breathable (tidak pengap)
    </Card.Text>
    <Card.Text>
    Aman untuk yg pakai kacamata (tidak berembun)
    </Card.Text>
    <Card.Text>
    TANPA jahitan di hidung
        </Card.Text>
    
 

  </>)
}
const DescShaylaOne = () => {
  return (<>
    <Card.Text>
    Bisa dipakai untuk acara pernikahan, wisuda, dan walimahan kamu. Warna-warnanya cantik ♥️
    </Card.Text>
    <Card.Text>
    * Berbahan Baby Doll Armany dengan handfeel terbaik. 
    </Card.Text>
    <Card.Text>
    * Busui friendly (ada resleting di dada)
    </Card.Text>
    <Card.Text>
    * Berlayer-layer dan full furing. Bisa dibayangin brp meter bahan yg dipakai kira-kira?
    </Card.Text>
    <Card.Text>
    * Tali di pinggang, jd tidak perlu takut kebesaran
    </Card.Text>
    <Card.Text>
    * Kancing di pergelangan tangan dengan rempel cantik & manis!
    </Card.Text>
    <Card.Text>
    * Dilengkapi renda di bagian bawahnya jadi no worry kalau pakai khimar panjang akan tetap ON point karena khimarnya tidak akan menutupi dress kamu 😍
        </Card.Text>
    
  <Card.Text>
  Ukuran: ALL SIZE! 
  </Card.Text>
  <Card.Text>
  LD up to 114 cm PB 140 cm
    </Card.Text>

  </>)
}

const DescShaylaTwo = () => {
  return(
    <>
            <Card.Text>• Berbahan Baby Doll Armany dengan handfeel terbaik</Card.Text>
                            <Card.Text>• Busui friendly (ada resleting di dada)</Card.Text>
                            <Card.Text>• Berlayer-layer dan full furing.</Card.Text>
                            <Card.Text>• Ada tali di pinggang jd tidak perlu takut kebesaran</Card.Text>
                            <Card.Text>• Kancing di pergelangan tangan yang sederhana tapi manis!</Card.Text>
                            <Card.Text>• Dilengkapi renda bunga & motif lipit di bagian bawahnya sehingga no worries kalau kamu suka pakai khimar panjang, dress ini akan tetap ON point karena khimarnya tidak akan menutupi dress cantik ini 😍
</Card.Text>
                            <Card.Text>ALL SIZE!</Card.Text>
                            <Card.Text>LD up to 110 cm PB 140 cm</Card.Text>
    </>
  )
}

const getPrice = (price) =>{
    return (price).toLocaleString('id', {
      style: 'currency',
      currency: "IDR"
    })
}