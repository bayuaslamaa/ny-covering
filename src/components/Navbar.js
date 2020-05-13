import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import Home from '../containers/Home'


export default function Navbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">NY.CO</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/khimar">Khimar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/abaya">Abaya</Link>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Lists
                             </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link to="/khimar">Khimar</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/abaya">Abaya</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/khimar"><h1>Khimar</h1></Route>
                <Route path="/abaya"><h1>abaya</h1></Route>
            </Switch>
        </Router>
    )
}