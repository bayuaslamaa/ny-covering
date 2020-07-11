import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions'
import { Carousel } from 'react-bootstrap'
import { FaInstagram } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { GrInstagram } from 'react-icons/gr'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


import CarouselHome1 from '../assets/CarouserHome1.jpeg'
import CarouselHome2 from '../assets/CarouselHome2.png'
import CarouselHome3 from '../assets/CarouselHome2.jpeg'



import ModelPink3 from '../assets/ModelPink3.jpg'
import ModelBlue3 from '../assets/ModelBlue3.jpg'
import ModelOlive3 from '../assets/ModelOlive3.jpg'

import ModelPink4 from '../assets/ModelPink4.jpg'
import ModelBlue4 from '../assets/ModelBlue4.jpg'
import ModelOlive4 from '../assets/ModelOlive4.jpg'

import ModelPink5 from '../assets/ModelPink5.jpg'
import ModelBlue5 from '../assets/ModelBlue5.jpg'
import ModelOlive5 from '../assets/ModelOlive5.jpg'


export default function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const khimar = useSelector(state => state.khimar)
    const abaya = useSelector(state => state.abaya)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
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
                        <div className="follow" style={{width: 300, fontSize: 22}}>
                        <a href="https://www.instagram.com/ny.covering/" style={{color:"black"}} >
                        <FontAwesomeIcon icon={faInstagram} size="1x"/> follow @ny.covering
                        </a></div>
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
