import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'
import Home from '../containers/Home'
import Abaya from '../containers/Abaya'
import Package from '../containers/Package'
import {Navbar} from 'react-bootstrap'
import Misha from '../containers/Misha'
import Farhah from '../containers/Khimar'
import logo from '../assets/logo.png'
import nyco from '../assets/nyco.png'


export default function NavbarPage() {

    return (
        <Router>
            <header>
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto" style={{ flex: 1, justifyContent: "space-between" }}>
                                <div class="navbar-brand">
                                    <img src={logo} width="30" height="30" alt="" />
                                </div>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/farhah">Farhah</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/misha">Misha</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/abaya">Abaya</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/set">Set</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/order">Order</Link>
                                </li> */}
                                {/* <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                                </form> */}
                            </ul>
                        </div>
                    </div>
                </Navbar>


                <div className="view intro-2">
                    <div className="full-bg-img">
                        <div className="mask rgba-black-strong flex-center">
                            <div className="container header">
                                <img alt="nyco" src={nyco} style={{ width: "50%", height: "20%", marginTop: 100, marginBottom: 0, paddingBottom: 0 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/farhah"><Farhah  /></Route>
                <Route path="/misha"><Misha  /></Route>
                <Route path="/abaya"><Abaya /></Route>
                {/* <Route path="/order"><h1>Order</h1></Route> */}
                <Route path="/set"><Package /></Route>
            </Switch>
        </Router>
    )
}