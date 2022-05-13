import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid containerNew">
                <Link className="navbar-brand logo" to="/"><span className='blueLogo'>DAO</span><span className='whiteLogo'>Grade</span></Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa-solid fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    
                    <div className="search_connectBtn">
                        {/* <input className="form-control me-2" type="search" placeholder="Enter DAO Name" aria-label="Search" /> */}
                        <button className="connectBtn">Connect</button>
                    </div>
                {/* </div> */}
            </div>
        </nav>
        </header>
    )
}

export default Navbar