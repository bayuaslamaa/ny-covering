import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions'
import { Carousel } from 'react-bootstrap'
import { FaInstagram } from 'react-icons/fa'
import Khimar1 from '../assets/Khimar1.png'
import Khimar2 from '../assets/Khimar2.jpg'
import Gamis1 from '../assets/Gamis1.jpg'
import Gamis2 from '../assets/Gamis2.jpg'
import Gamis3 from '../assets/Gamis3.jpg'
import Gamis4 from '../assets/Gamis4.jpg'
import Gamis5 from '../assets/Gamis5.jpg'

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import ModelPink1 from '../assets/ModelPink1.jpg'
import ModelBlue1 from '../assets/ModelBlue1.jpg'
import ModelOlive1 from '../assets/ModelOlive1.jpg'

import ModelPink2 from '../assets/ModelPink2.jpg'
import ModelBlue2 from '../assets/ModelBlue2.jpg'
import ModelOlive2 from '../assets/ModelOlive2.jpg'

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
            <div className="container" style={{ display: "flex", flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-evenly", marginTop: 0 }}>
                {/* KHIMAR */}
                <div className="col-8" >
                    <Carousel interval={800}>
                        <Carousel.Item>
                            <img
                                style={{ height: "60%", width: "60%" }}
                                className="d-block"
                                src="https://i.imgur.com/ngcAtRp.png"
                                alt="slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "100%", width: "100%" }}
                                className="d-block"
                                src="https://i.imgur.com/k7jNLIq.png"
                                alt="slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "100%", width: "100%" }}
                                className="d-block"
                                src="https://i.imgur.com/wpgMY3v.png"
                                alt="slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "100%", width: "100%" }}
                                className="d-block"
                                src={Khimar1}
                                alt="slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: "100%", width: "100%" }}
                                className="d-block"
                                src={Khimar2}
                                alt="slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>
                {/* <div className="col-3">
                <Carousel interval={800}>

                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={Gamis1}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={Gamis2}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={Gamis3}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={Gamis4}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={Gamis5}
                            alt="slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-3">
                <Carousel interval={800}>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelPink1}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelBlue1}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelOlive1}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelPink2}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelBlue2}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelOlive2}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelPink3}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelBlue3}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelOlive3}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelPink4}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelBlue4}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelOlive4}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelPink5}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelBlue5}
                            alt="slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={ModelOlive5}
                            alt="slide"
                        />
                    </Carousel.Item>


                </Carousel>
            </div> */}
            </div>
            <FooterPage />
        </>
    )
}



const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-5 mt-5">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">Our Social Media</h5>
                    </MDBCol>
                    <MDBCol md="8">
                        <h5 className="title">You can find us at:</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="https://www.instagram.com/ny.covering/"><FaInstagram /></a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Bayu Aslama
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

// export default FooterPage;