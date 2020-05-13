import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions'
import { Carousel } from 'react-bootstrap'


export default function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    console.log(products)
    return (
        <div className="col-5 offset-4">
            <Carousel wrap={true} interval={800}>
                {
                    products.map(product => (<Carousel.Item>
                        <img
                            style={{ height: "100%", width: "100%" }}
                            className="d-block"
                            src={product.image_url}
                            alt="slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>))
                }



            </Carousel>
        </div>
    )
}