import React from "react"
import { Link } from "react-router-dom";
import './navbar.css'

function Nav_bar(){

    return(
    <nav className="navbar bg container">
        <h4> <Link className="link" to="/detalii">Detalii Afine</Link> </h4>
        <h4> <Link className="link" to="/cules">Cules</Link> </h4>
        <h4> <Link className="link" to="/fertilizare">Fertilizare</Link> </h4>
        <h4> <Link className="link" to="/test">test api</Link> </h4>


    </nav>
)

}

export default Nav_bar;