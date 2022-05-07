import React, { useState } from 'react';
import '../Styles/Navigation.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Navigation(props) {
const {pages=[], setPage, page} = props
const [activeNav, setActiveNav] = useState("#")


return (
<nav className="navbar navbar-expand-lg justify-content-center">
<h1>Maria Paterno</h1>
<br></br>
    <div className="">
        <ul className="navbar-nav align-items-center">
    <a 
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
    ><li className="nav-item" >
            <button id='About' onClick={() => setPage(pages[0])}>{pages[0]}</button>
        </li></a>
        <a 
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
        ><li className="nav-item" >
        <button id='Work' onClick={() => setPage(pages[1])}>{pages[1]}</button>
        </li></a>
        <li className="nav-item" >
            <button id='Contact-Me' onClick={() => setPage(pages[2])}>{pages[2]}</button>
        </li>
        <li className="nav-item" >
            <button onClick={() => setPage(pages[3])}>{pages[3]}</button>
        </li>
        </ul>
    </div>
</nav> 
);
}


export default Navigation;


// <div><p id='head1' class='header'>Hello...</p>
// {/* <p id='head2' class='header'>And Welcome...</p>
// <p id='head3' class='header'>To My Portfolio</p>
// {/* <p id='head4' class='header'></p>
// <p id='head5' class='header'></p></div> */}</div> */}