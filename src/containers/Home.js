import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions'
import { Carousel } from 'react-bootstrap'


export default function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const khimar = useSelector(state => state.khimar)
    const abaya = useSelector(state => state.abaya)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className="container" style={{ display: "flex", flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-evenly" }}>
            <div className="col-3 " >
                <Carousel interval={800}>
                    {
                        products.map(product => (<Carousel.Item key={product.id}>
                            <img
                                style={{ height: "100%", width: "100%" }}
                                className="d-block"
                                src={product.image_url}
                                alt="slide"
                            />
                            {/* <Carousel.Caption>
                            <h1>{product.name}</h1>
                            <h3>IDR {product.price}</h3>
                        </Carousel.Caption> */}
                        </Carousel.Item>))
                    }



                </Carousel>
            </div>
            <div className="col-3">
                <Carousel interval={800}>
                    {
                        khimar.map(khim => (<Carousel.Item key={khim.id}>
                            <img
                                style={{ height: "100%", width: "100%" }}
                                className="d-block"
                                src={khim.image_url}
                                alt="slide"
                            />
                            {/* <Carousel.Caption>
                            <h1>{product.name}</h1>
                            <h3>IDR {product.price}</h3>
                        </Carousel.Caption> */}
                        </Carousel.Item>))
                    }



                </Carousel>
            </div>
            <div className="col-3">
                <Carousel interval={800}>
                    {
                        products.map(product => (<Carousel.Item key={product.id}>
                            <img
                                style={{ height: "100%", width: "100%" }}
                                className="d-block"
                                src={product.image_url}
                                alt="slide"
                            />
                            {/* <Carousel.Caption>
                            <h1>{product.name}</h1>
                            <h3>IDR {product.price}</h3>
                        </Carousel.Caption> */}
                        </Carousel.Item>))
                    }



                </Carousel>
            </div>
        </div>
    )
}