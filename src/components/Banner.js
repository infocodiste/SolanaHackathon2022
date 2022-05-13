import React from 'react'
import bannerImg from '../images/dao-banner.png'
import { NavLink } from 'react-router-dom'

const Banner = () => {
    return (
        <section className='bannerSection'>
            <div className="containerNew">

                <div className="row banner">

                    <div className="col-md-6 left">
                        <h2>The world's <br />
                            first Grading System for DAO</h2>

                        <p>We're fuelling the decentralized future by building the original DAO marketplace. Discover, invest and manage your DAOs all in one place. To get started, try our DAO Personality Quiz.</p>

                        <NavLink to='#'>See More</NavLink>
                    </div>

                    <div className="col-md-6 right">
                        <div className="image">
                            <img src={bannerImg} alt="" className='img-fluid' />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Banner