import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>Home</Link>
                    </li>
                     
                    <li className="nav-item">
                    <Link className="nav-link" to="/business" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>Business</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link" to="/entertainment" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>Entertainment</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link" to="/general" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>General</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link" to="/health" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>Health</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link" to="/science" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>Science</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link" to="/sports" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>Sports</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link" to="/technology" style={{backgroundColor:'rgb(110, 44, 242)',color:'#ffffff'}}>Technology</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </>
    )
  }

export default Navbar
