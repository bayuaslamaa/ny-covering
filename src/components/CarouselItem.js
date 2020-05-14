import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function CarouselItem({ product }) {
    console.log(product)
    return (
        <>
            <Carousel.Item>
                <img
                    style={{ height: "100%", width: "100%" }}
                    className="d-block"
                    src={product.image_url}
                    alt="slide"
                />
                <Carousel.Caption>
                    <h1>{product.name}</h1>
                    <h3>IDR {product.price}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </>)
}