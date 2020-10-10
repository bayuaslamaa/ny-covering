import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'
import Home from '../containers/Home'
import Abaya from '../containers/Abaya'
import Zara from '../containers/Zara'
import ZaraBlack from '../containers/ZaraBlack'
import ShaylaOne from '../containers/ShaylaOne'
import ShaylaTwo from '../containers/ShaylaTwo'
// import Package from '../containers/Package'
import { Navbar, NavDropdown,  Badge, Button } from 'react-bootstrap'
import Misha from '../containers/Misha'
import Farhah from '../containers/Khimar'
import logo from '../assets/logo.png'
import nyco from '../assets/nyco.png'
import Cart from '../containers/Cart'
import Cadar from '../containers/Cadar'
import Confirmation from '../containers/Confirmation'
import { MDBIcon } from 'mdbreact'
import {useSelector, useDispatch} from 'react-redux'
import './Navbar.css';
import { onClickMenu } from '../store/actions'

// function NavbarOld() {
//     const addedItems = useSelector(state => state.addedItems)
//     return (
//         <Router>
//             <header>
//                 <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
//                     <div className="container">
//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>

//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav mr-auto" style={{ flex: 1, justifyContent: "space-between" }}>
//                                 <div className="navbar-brand">
//                                     <img src={logo} width="30" height="30" alt="" />
//                                 </div>
//                                 {
//                                     addedItems.length ? ( <li className="nav-item" style={{backgroundColor: "sandybrown", }}>
//                                     <Link title="CEK KERANJANG" className="nav-link" to="/cart" style={{color: "white"}}><MDBIcon icon="shopping-cart" /> Keranjang Kamu</Link>
//                                 </li>) : (<></>)
//                                 }
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavDropdown title="New!" id="basic-nav-dropdown" >
//                                         <Link className="nav-link" to="/cadar-farhah">
//                                             Cadar Farhah
//                                         </Link>

//                                     <NavDropdown.Divider />
//                                          <Link className="nav-link" to="/zara-color">Zara Abaya {<p style={{color: "#9C7A76"}}>color series</p>}</Link>
                                 
//                                     <NavDropdown.Divider />
//                                         <Link className="nav-link" to="/zara-black">Zara Abaya {<p style={{color: "#9C7A76"}}>black series</p>}</Link>

//                                         <NavDropdown.Divider />
//                                         <Link className="nav-link" to="/shayla-one">Shayla Dress {<p style={{color: "#9C7A76"}}>Style 1</p>}</Link>
                                 
//                                  <NavDropdown.Divider />
//                                      <Link className="nav-link" to="/shayla-two">Shayla Dress{<p style={{color: "#9C7A76"}}>Style 2</p>}</Link>
//                                  <NavDropdown.Divider />
//                                          <Link className="nav-link" to="/farhah">Farhah Khimar <Badge pill variant="warning">New Item </Badge></Link>
//                                     </NavDropdown>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavDropdown title="Khimar" id="basic-nav-dropdown">
//                                         {/* <NavDropdown.Item> */}
//                             <Link className="nav-link" to="/farhah">Farhah Khimar </Link>
//                                         <NavDropdown.Divider />
//                                         {/* <NavDropdown.Item> */}
//                                             <Link className="nav-link" to="/misha">Misha Khimar </Link>
//                                         {/* </NavDropdown.Item> */}
//                                     </NavDropdown>
//                                 </li>
//                                 <li className="nav-item">
//                                 <NavDropdown title="Abaya" id="basic-nav-dropdown">
                                     
//                                             <Link className="nav-link" to="/abaya">Misha Abaya</Link>
                                      
//                                     <NavDropdown.Divider />
//                                          <Link className="nav-link" to="/zara-color">Zara Abaya {<p style={{color: "#9C7A76"}}>color series</p>}</Link>
                                 
//                                     <NavDropdown.Divider />
//                                         <Link className="nav-link" to="/zara-black">Zara Abaya{<p style={{color: "#9C7A76"}}>black series</p>}</Link>
//                                 </NavDropdown>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavDropdown title="Cadar" id="basic-nav-dropdown">
//                                         <Link className="nav-link" to="/cadar-farhah">
//                                             Cadar Farhah
//                                         </Link>
//                                     </NavDropdown>
//                                 </li>
//                                 <li className="nav-item">
//                                 <NavDropdown title="Dress" id="basic-nav-dropdown">
//                                          <Link className="nav-link" to="/shayla-one">Shayla Dress {<p style={{color: "#9C7A76"}}>Style 1</p>}</Link>
                                 
//                                     <NavDropdown.Divider />
//                                         <Link className="nav-link" to="/shayla-two">Shayla Dress{<p style={{color: "#9C7A76"}}>Style 2</p>}</Link>
//                                 </NavDropdown>
//                                 </li>
//                                 {addedItems.length ? <li></li> : <li></li>}
//                             </ul>
                          
//                         </div>
//                     </div>
//                 </Navbar>


//                 <div className="view intro-2">
//                     <div className="full-bg-img">
//                         <div className="mask rgba-black-strong flex-center">
//                             <div className="container header">
//                                 <img alt="nyco" src={nyco} style={{ width: "50%", height: "20%", marginTop: 100, marginBottom: 0, paddingBottom: 0 }} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             <Switch>
//                 <Route exact path="/"><Home /></Route>
//                 <Route path="/farhah"><Farhah  /></Route>
//                 <Route path="/misha"><Misha  /></Route>
//                 <Route path="/abaya"><Abaya /></Route>
//                 <Route path="/cart"><Cart/> </Route>
//                 <Route path="/zara-color"><Zara /></Route>
//                 <Route path="/zara-black"><ZaraBlack /></Route>
//                 <Route path="/cadar-farhah"><Cadar /></Route>
//                 <Route path="/shayla-one"><ShaylaOne /></Route>
//                 <Route path="/shayla-two"><ShaylaTwo /></Route>
//                 <Route path="/confirm"><Confirmation/></Route>
//             </Switch>
//         </Router>
//     )
// }


export default function NavbarPage() {
 const dispatch = useDispatch()
  const [click, setClick] = useState(false);
  const addedItems = useSelector(state => state.addedItems)
  const handleClick = () => {
      setClick(!click)
      dispatch(onClickMenu(!click))
  };
  const closeMobileMenu = () => {
      setClick(false)
      dispatch(onClickMenu(false))
  };



  return (
    <><Router>
        <header>    
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <div className="navbar-brand">
                                    <img src={logo} width="30" height="30" alt="" />
                         </div>
          
                    </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                {
                                    addedItems.length ? ( <li className="nav-item" style={{backgroundColor: "sandybrown", }}>
                                    <Link title="CEK KERANJANG" className="nav-links"  onClick={closeMobileMenu} to="/cart" style={{color: "white"}}><MDBIcon icon="shopping-cart" /> Keranjang Kamu</Link>
                                </li>) : (<></>)
                                }
                                <li className="nav-item">
                                    <Link className="nav-links" to="/"  onClick={closeMobileMenu} >Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                  <NavDropdown title="New!"  className="nav-links" id="basic-nav-dropdown" >
                                        <Link className="nav-links" to="/cadar-farhah" onClick={closeMobileMenu}>
                                             Cadar Farhah
                                         </Link>

                                     <NavDropdown.Divider />
                                        <Link className="nav-links" to="/zara-color" onClick={closeMobileMenu}>Zara Abaya {<p style={{color: "#9C7A76"}}>Color Series</p>}</Link>
                                 
                                     <NavDropdown.Divider />
                                         <Link className="nav-links" to="/zara-black" onClick={closeMobileMenu}>Zara Abaya {<p style={{color: "#9C7A76"}}>Black Series</p>}</Link>

                                         <NavDropdown.Divider />
                                         <Link className="nav-links" to="/shayla-one" onClick={closeMobileMenu}>Shayla Dress {<p style={{color: "#9C7A76"}}>Style 1</p>}</Link>
                                 
                                 <NavDropdown.Divider />
                                      <Link className="nav-links" to="/shayla-two" onClick={closeMobileMenu}>Shayla Dress{<p style={{color: "#9C7A76"}}>Style 2</p>}</Link>
                                  <NavDropdown.Divider />
                                          <Link className="nav-links" to="/farhah" onClick={closeMobileMenu}>Farhah Khimar{<><Badge pill variant="warning">New Item </Badge></>}</Link>
                                     </NavDropdown>
                                 </li>
                                 <li className="nav-item">
                                    <NavDropdown title="Khimar" className="nav-links" id="basic-nav-dropdown">
                                        
                                         <Link className="nav-links" to="/farhah" onClick={closeMobileMenu}>Farhah Khimar </Link>
                                        <NavDropdown.Divider />
                                      
                                            <Link className="nav-links" to="/misha" onClick={closeMobileMenu}>Misha Khimar </Link>
                                       
                                    </NavDropdown>
                                </li>
                                 <li className="nav-item">
                                    <NavDropdown title="Abaya" className="nav-links" id="basic-nav-dropdown">
                                        
                                         <Link className="nav-links" to="/farhah" onClick={closeMobileMenu}>Farhah Khimar </Link>
                                        <NavDropdown.Divider />
                                      
                                            <Link className="nav-links" to="/misha" onClick={closeMobileMenu}>Misha Khimar </Link>
                                       
                                    </NavDropdown>
                                </li>
                                 <li className="nav-item">
                                    <NavDropdown title="Cadar" className="nav-links" id="basic-nav-dropdown">
                                    <Link className="nav-links" to="/cadar-farhah" onClick={closeMobileMenu}>
                                            Cadar Farhah
                                        </Link>
                                    </NavDropdown>
                                </li>
                                 <li className="nav-item">
                                    <NavDropdown title="Dress" className="nav-links" id="basic-nav-dropdown">
                                        
                                    <Link className="nav-links" to="/shayla-one" onClick={closeMobileMenu}>Shayla Dress {<p style={{color: "#9C7A76"}}>Style 1</p>}</Link>
                                        <NavDropdown.Divider />
                                      
                                        <Link className="nav-links" to="/shayla-two" onClick={closeMobileMenu}>Shayla Dress{<p style={{color: "#9C7A76"}}>Style 2</p>}</Link>
                                       
                                    </NavDropdown>
                                </li>
                                 
   
        
        </ul>
            </div>
            
            </Navbar>
            <div className="view intro-2">
                    <div className="full-bg-img">
                        <div className="mask rgba-black-strong flex-center">
                            <div className="container header">
                                <img alt="nyco" src={nyco} style={{ width: "50%", height: "20%", marginTop:50, marginBottom: 0, paddingBottom: 0 }} />
                            </div>
                        </div>
                    </div>
                    {
                                    addedItems.length && window.innerWidth < 960 ? (<Link title="CEK KERANJANG"   onClick={closeMobileMenu} to="/cart" style={{color: "white"}}><Button style={{backgroundColor: "sandybrown",  width: 200, height: 50, marginBottom: 50, paddingTop: 0}}>
                                 <MDBIcon icon="shopping-cart" /> Keranjang Kamu
                                </Button></Link>) : (<></>)
                                }
                </div>
        </header>

        <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/farhah"><Farhah  /></Route>
                <Route path="/misha"><Misha  /></Route>
                <Route path="/abaya"><Abaya /></Route>
                <Route path="/cart"><Cart/> </Route>
                <Route path="/zara-color"><Zara /></Route>
                <Route path="/zara-black"><ZaraBlack /></Route>
                <Route path="/cadar-farhah"><Cadar /></Route>
                <Route path="/shayla-one"><ShaylaOne /></Route>
                <Route path="/shayla-two"><ShaylaTwo /></Route>
                <Route path="/confirm"><Confirmation/></Route>
            </Switch>
      </Router>
    </>
  );
}