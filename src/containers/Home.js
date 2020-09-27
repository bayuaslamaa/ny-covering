import React, {useEffect} from 'react'
import {envi} from "../config"
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faInstagram
//   } from "@fortawesome/free-brands-svg-icons";
import ReactPixel from 'react-facebook-pixel'
import { CardDeck, Card } from 'react-bootstrap'


import CarouselHome1 from '../assets/CarouserHome1.jpg'
import CarouselHome2 from '../assets/CarouselHome2.jpg'
import CarouselHome3 from '../assets/CarouselHome3.jpg'



export default function Home() {
    const item1 = useSelector(state => state.items[0])
    const item2 = useSelector(state => state.items[1])
    const item3 = useSelector(state => state.items[2])
    const item4 = useSelector(state => state.items[3])
    const item5 = useSelector(state => state.items[4])
    const item6 = useSelector(state => state.items[5])
    const item7 = useSelector(state => state.items[6])
    const item8 = useSelector(state => state.items[7])
    const item9 = useSelector(state => state.items[8])
    useEffect(()=>{
     if (envi === "production") {
       ReactPixel.init("614220549496198")
       ReactPixel.pageView()
     }
    }, [])
    return (
        <>
            <div className="container" style={{ display: "flex", flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-evenly", height: 120 }}>

                <div className="col-12" style={{ top: -100, marginTop: 0, width: "30%" }}>
                    <Carousel interval={2500} controls={false} indicators={false} >
                        <Carousel.Item>
                            <img
                                style={{ width: "100%" }}
                                className="d-block h-70"
                                src={CarouselHome1}
                                alt="slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: "100%" }}
                                className="d-block"
                                src={CarouselHome2}
                                alt="slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: "100%" }}
                                className="d-block"
                                src={CarouselHome3}
                                alt="slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>
                <div className={"container col-6 offset-3"} style={{marginBottom: 20}}>
                    <h1>Farhah Khimar</h1>
                      <CardDeck>
                    <HomeCard item={item1} />
                    <HomeCard item={item2} />
                    <HomeCard item={item3} />
                  

                     </CardDeck>
                </div>
                <div className={"container col-6 offset-3"} style={{marginBottom: 20}}>
                    <h1>Misha Khimar</h1>
                      <CardDeck>
                    <HomeCard item={item4} />
                    <HomeCard item={item5} />
                    <HomeCard item={item6} />
                  

                     </CardDeck>
                </div>
                <div className={"container col-6 offset-3"} style={{marginBottom: 20}}>
                    <h1>Misha Abaya</h1>
                <CardDeck>
                    <HomeCard item={item7} />
                    <HomeCard item={item8} />
                    <HomeCard item={item9} />

                </CardDeck>
                </div>
                <FooterPage />
            </div>
        </>
    )
}

const HomeCard = ({item}) => {
    
    

    return (
    <Card>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
        <Card.Title style={{ fontSize: 18 }}>{item.name}</Card.Title>
        {/* <Card.Text>
                    Arabian Crepe HQ
        </Card.Text>
                <Card.Text> Bahan bertekstur kulit jeruk yang empuk, stretch (agak melar ketika ditarik) dan jatuh.</Card.Text>
                <Card.Text>Model abaya A line dengan cutting free step (bebas melangkah)</Card.Text>
                <Card.Text>Ada saku kanan dan kiri</Card.Text>
                <Card.Text>Ada resleting di dada (busui friendly)</Card.Text>
                <Card.Text>Abaya ready dalam warna-warna pastel yg cantik! </Card.Text>
                <Card.Text>READY STOCK</Card.Text>
                <Card.Text>Size S LD 94 cm & PB 133 cm</Card.Text> */}
                <Card.Text> IDR {item.price}</Card.Text>
        {/* <ButtonOrder id={7}/> */}
    </Card.Body>
    {/* <Card.Footer>
        <small className="text-muted">Stocks: 20</small>
    </Card.Footer> */}
</Card>)
}

const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-5 mt-5">
            <MDBContainer fluid className="text-center text-md-center">
                <MDBRow>
                    <MDBCol md="5">
                        {/* <h4 className="title">Follow:</h4>
                        <ul>
                            <li className="list-unstyled">
                                <IconContext.Provider value={{ color: "grey", className: "global-class-name", size: "2em" }}>
                                    <div>
                                        <a style={{ color: "black", fontSize: 20 }} href="https://www.instagram.com/ny.covering/"><GrInstagram />@ny.covering</a>
                                    </div>
                                </IconContext.Provider>

                            </li>
                        </ul> */}
                        {/* <div className="follow" style={{width: "100vw", fontSize: 44, backgroundColor:"#9C7A76"}}>
                        <a href="https://www.instagram.com/ny.covering/" style={{color:"black"}} >
                        <FontAwesomeIcon icon={faInstagram} size="1x"/> Follow Us
                        </a></div> */}
                    </MDBCol>
                    <MDBCol md="8">
                        {/* <h5 className="title">You can find us at:</h5> */}

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            {/* <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Bayu Aslama
                </MDBContainer>
            </div> */}
            <div>
                <p></p>
            </div>
        </MDBFooter>
    );
}

// export default FooterPage;
