import React from 'react'



export default ({ el, setBlue, setPink }) => {
    return ((
        <div div className="container col-4" >
            <div className="card-group">
                <div className="card card-cascade wider">

                    <div className="view view-cascade overlay">
                        <img className="card-img-top" src={el.image_url} alt="Card" />
                    </div>

                    <div className="card-body card-body-cascade text-center pb-0">

                        <h4 className="card-title"><strong>{el.name}</strong></h4>

                        <h5 className="blue-text pb-2"><strong>IDR {el.price}</strong></h5>

                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam. </p>

                        <a href={`https://wa.me/6287878899474?text=Assalamualaikum wa rahmatullah wa barakatuh NY.Covering...%0A Saya mau order kak%0A%0AIni data dan pesanan saya kak: (mohon diisi secara lengkap)%0ANama: %0AAlamat Lengkap: %0ANo. HP:%0AOrder: (nama barang, warna dan jumlah)%0APayment: (BNI/BCA/Mandiri)`}>Order Now</a> <br />

                        <button onClick={() => {
                            setBlue(true)
                            setPink(false)
                        }}>blue</button>
                        <button onClick={() => {
                            setBlue(false)
                            setPink(true)
                        }}>pink</button>
                        <div className="card-footer text-muted text-center mt-4">
                            @ny.covering
                        </div>

                    </div>

                </div>
            </div>
        </div >))
}