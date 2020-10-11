import React, {useEffect} from 'react'
import {envi} from "../config"
import {  useSelector } from 'react-redux'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faInstagram
//   } from "@fortawesome/free-brands-svg-icons";
import ReactPixel from 'react-facebook-pixel'
import { CardDeck, Card, Carousel, Button, Badge,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import CarouselHome1 from '../assets/CarouserHome1.jpg'
import CarouselHome2 from '../assets/CarouselHome2.jpg'
import CarouselHome3 from '../assets/CarouselHome3.jpg'
import CarouselHome4 from '../assets/Carousell1.jpeg'
import CarouselHome5 from '../assets/Carousell2.jpeg'
import CarouselHome6 from '../assets/Carousell3.jpeg'




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
    const item13 = useSelector(state => state.items[12])
    const item14 = useSelector(state => state.items[13])
    const item15 = useSelector(state => state.items[14])
    const item21 = useSelector(state => state.items[21])
    const item22 = useSelector(state => state.items[22])
    const item23 = useSelector(state => state.items[23])
    const item26 = useSelector(state => state.items[25])
    const item27 = useSelector(state => state.items[26])
    const item28 = useSelector(state => state.items[27])
    const item29 = useSelector(state => state.items[28])
    const item30 = useSelector(state => state.items[29])
    const item33 = useSelector(state => state.items[32])
    const item34 = useSelector(state => state.items[33])
    const item35 = useSelector(state => state.items[34])


    const item36 = useSelector(state => state.items[35])
    const item37 = useSelector(state => state.items[36])
    
    const click = useSelector(state => state.click)

    useEffect(()=>{
     if (envi === "production") {
       ReactPixel.init("614220549496198")
       ReactPixel.pageView()
     }
    }, [])
    return (
        <>
            <div className="container" style={{ display: "flex", flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-evenly", height: 120 }}>
{
    click ? <></> : (<div className="col-12" style={{ top: -100, marginTop: 0, width: "30%" }}>
    <Carousel interval={1500} controls={false} indicators={false} >
        <Carousel.Item>
            <img
                style={{ width: "100%" }}
                className="d-block h-70"
                src={CarouselHome4}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                style={{ width: "100%" }}
                className="d-block h-70"
                src={CarouselHome5}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                style={{ width: "100%" }}
                className="d-block h-70"
                src={CarouselHome6}
                alt="slide"
            />
        </Carousel.Item>
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
                className="d-block h-70"
                src={CarouselHome2}
                alt="slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                style={{ width: "100%" }}
                className="d-block h-70"
                src={CarouselHome3}
                alt="slide"
            />
        </Carousel.Item>

    </Carousel>
</div>)
}
                
                <div className={"container col-sm-9 offset-sm-2"} style={{marginBottom: 20}}>
                <h3>Shayla Dress Style 2 <Badge pill variant="light">New Collection</Badge> </h3>

                        <CardDeck>
                        <HomeCard item={item36} />
                        <HomeCard item={item37} />
                        <Link to={{pathname: "/shayla-two"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 170, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>


                        </CardDeck>
                        </div>
                <div className={"container col-sm-8 offset-sm-2"} style={{marginBottom: 30}}>
                     <h3>Farhah Cadar <Badge pill variant="light">New Collection</Badge> </h3>
    
                      <CardDeck>
                    <HomeCard item={item28} />
                    <HomeCard item={item29} />
                    <HomeCard item={item30} />
                <Link to={{pathname: "/cadar-farhah"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>
                  

                     </CardDeck>
                </div>
                <div className={"container col-sm-8 offset-sm-2"} style={{marginBottom: 20}}>
                <h3>Shayla Dress Style 1 <Badge pill variant="light">New Collection</Badge> </h3>
    
                      <CardDeck>
                    <HomeCard item={item33} />
                    <HomeCard item={item35} />
                    <HomeCard item={item34} />
                <Link to={{pathname: "/shayla-one"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>
                  

                     </CardDeck>
                </div>
                <div className={"container col-sm-9 offset-sm-2"} style={{marginBottom: 20}}>
                <h3><Badge pill variant="warning">New Arrival</Badge> Farhah Khimar</h3>

                        <CardDeck>
                        <HomeCard item={item26} />
                        <HomeCard item={item27} />
                        <Link to={{pathname: "/farhah"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>


                        </CardDeck>
                        </div>
                <div className={"container col-sm-8 offset-sm-2"} style={{marginBottom: 20}}>
                     <h3>Zara Abaya <Badge pill variant="light">New Collection</Badge> </h3>
    
                    <h5 style={{color: "#9C7A76"}}>Color Series </h5>
                      <CardDeck>
                    <HomeCard item={item13} />
                    <HomeCard item={item14} />
                    <HomeCard item={item15} />
                <Link to={{pathname: "/zara-color"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>
                  

                     </CardDeck>
                </div>
              
                <div className={"container col-sm-8 offset-sm-2"} style={{marginBottom: 20}}>

                <h3>Zara Abaya <Badge pill variant="light">New Collection</Badge> </h3>
                    <h5 style={{color: "#9C7A76"}}>Black Series</h5>
                      <CardDeck>
                    <HomeCard item={item21} />
                    <HomeCard item={item22} />
                    <HomeCard item={item23} />
                      <Link to={{pathname: "/zara-black"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>
                  

                     </CardDeck>
                </div>
                <div className={"container col-sm-8 offset-sm-2"} style={{marginBottom: 20}}>

                    <h1>Farhah Khimar</h1>
                      <CardDeck>
                    <HomeCard item={item1} />
                    <HomeCard item={item2} />
                    <HomeCard item={item3} />
                    <Link to={{pathname: "/farhah"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>
                  

                     </CardDeck>
                </div>
                <div className={"container col-sm-8 offset-sm-2"} style={{marginBottom: 20}}>
                    <h1>Misha Khimar</h1>
                      <CardDeck>

                    <HomeCard item={item4} />
                    <HomeCard item={item5} />
                    <HomeCard item={item6} />
                      <Link to={{pathname: "/misha"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>
                  

                     </CardDeck>
                </div>
                <div className={"container col-sm-8 offset-sm-2"} style={{marginBottom: 20}}>
                    <h1>Misha Abaya</h1>
                <CardDeck>
                    <HomeCard item={item7} />
                    <HomeCard item={item8} />
                    <HomeCard item={item9} />
                    <Link to={{pathname: "/abaya"}} style={{color:"white"}}>     <Button variant={"light"} style={{color: "white", backgroundColor:"#9C7A76", width: 200, height: 40 , fontSize: 20, marginBottom: 30}}>Selengkapnya...</Button> </Link>

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
