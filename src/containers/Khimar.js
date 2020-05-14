import React from 'react'
import { useSelector } from 'react-redux'

export default function Khimar() {
    const khimar = useSelector(state => state.khimar)
    return khimar.map(khim => (

        <div div className="container col-5" >
            <div className="card-group">
                <div className="card card-cascade wider">

                    <div className="view view-cascade overlay">
                        <img className="card-img-top" src={khim.image_url} alt="Card" />
                    </div>

                    <div className="card-body card-body-cascade text-center pb-0">

                        <h4 className="card-title"><strong>{khim.name}</strong></h4>

                        <h5 className="blue-text pb-2"><strong>IDR {khim.price}</strong></h5>

                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam. </p>

                        <a href={`https://wa.me/6287878899474?text=Assalamualaikum wa rahmatullah wa baraktuh%0A saya mau order kak%0A`}>Order Now</a>

                        <div className="card-footer text-muted text-center mt-4">
                            @ny.covering
                        </div>

                    </div>

                </div>
            </div>
        </div >))
}