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

                        <p>We're fuelling the decentralized future by building the Decentralised DAO Grading System. It's completely Decentralised And You can decide your own strategy to get Ranking of DAO</p>

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

export default Banner;