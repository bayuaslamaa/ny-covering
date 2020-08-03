import React, {useEffect} from 'react'
// import { useDispatch } from 'react-redux'
import { Carousel } from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faInstagram
//   } from "@fortawesome/free-brands-svg-icons";
import ReactPixel from 'react-facebook-pixel'


import CarouselHome1 from '../assets/CarouserHome1.jpg'
import CarouselHome2 from '../assets/CarouselHome2.jpg'
import CarouselHome3 from '../assets/CarouselHome3.jpg'



export default function Home() {
    useEffect(()=>{
       ReactPixel.init("614220549496198")
       ReactPixel.pageView()
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

                <FooterPage />
            </div>
        </>
    )
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
