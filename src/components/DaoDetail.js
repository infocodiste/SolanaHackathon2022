import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { daoData } from '../components/daoData'

const DaoDetail = () => {

    const { dao } = useParams();

    useEffect(() => {
        // console.log(daoData);
    }, [daoData])

    const thisData = daoData.find((elem) => elem.TreasuryAddress == dao);
    return (
        <div className="main">
            <section className='detailPageSec'>
                <div className="bgBanner"></div>
                <div className="containerNew">
                    <div className="row detailArea">

                        <div className="left col-md-7">
                            <div className="logo">
                                <img src={thisData.image} alt="" height='150px' />
                            </div>
                            <div className="title">
                                <h2>{thisData.name}</h2>
                                <h4>${thisData.daoToken}</h4>
                            </div>
                            <p>{thisData.mission}</p>
                            <div className="tabs">
                                <div className="category">
                                    <span className='title'>CATAGORIES: </span>
                                    {
                                        thisData.category.map((elem, i) => {
                                            return <p>{elem}</p>;
                                        })
                                    }
                                </div>
                                <div className="chain">
                                    <span className="title">CHAIN: </span>
                                    <div className="items">
                                        {/* {
                                            thisData.chain.map((elem, i) => {
                                                return (
                                                    <p key={i}>{elem}</p>
                                                )
                                            })
                                        } */}
                                        <p>{thisData.chain}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="right col-md-5">
                            <div className="sideBtns">
                                <NavLink to="">Buy Tokan</NavLink>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>

                            <div className="connect">
                                <h4>Connect</h4>
                                <div className="links">
                                    <a href={thisData.website} target='_BLANK' className="website"><i class="fa-solid fa-globe"></i> {(thisData.website).replace('https://','')}</a>
                                    <a href={thisData.discord} target='_BLANK' className="discord"><i class="fa-brands fa-discord" style={{color:'#5865F2'}}></i> Discord</a>
                                    <a href={thisData.twitter} target='_BLANK' className="twitter"><i class="fa-brands fa-twitter" style={{color:'#55ACEE'}}></i> Twitter</a>
                                    <a href={thisData.whitepaper} target='_BLANK' className="twitter"><i class="fa-solid fa-file"></i> Whitepaper</a>
                                </div>
                            </div>

                            <div className="other">
                                <div className="tokan same">
                                    <span>TOKEN</span>
                                    <span>${thisData.daoToken}</span>
                                </div>
                                <div className="treasury same">
                                    <span>TREASURY</span>
                                    <span>N/A</span>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="row tabSection">

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="Overview-tab" data-bs-toggle="tab" data-bs-target="#Overview" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Financials-tab" data-bs-toggle="tab" data-bs-target="#Financials" type="button" role="tab" aria-controls="profile" aria-selected="false">Financials</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="News-tab" data-bs-toggle="tab" data-bs-target="#News" type="button" role="tab" aria-controls="contact" aria-selected="false">News</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Community-tab" data-bs-toggle="tab" data-bs-target="#Community" type="button" role="tab" aria-controls="contact" aria-selected="false">Community</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Overview" role="tabpanel" aria-labelledby="Overview-tab">
                            <h6 style={{marginBottom:'10px'}}><strong>Mission</strong></h6>
                            {thisData.mission}
                            </div>
                            <div className="tab-pane fade" id="Financials" role="tabpanel" aria-labelledby="Financials-tab">
                            <h6 style={{marginBottom:'10px'}}><strong>Comming soon...</strong></h6>
                            </div>
                            <div className="tab-pane fade" id="News" role="tabpanel" aria-labelledby="News-tab">
                            <h6 style={{marginBottom:'10px'}}><strong>Comming soon...</strong></h6>
                            </div>
                            <div className="tab-pane fade" id="Community" role="tabpanel" aria-labelledby="Community-tab">
                            <h6 style={{marginBottom:'10px'}}><strong>Comming soon...</strong></h6>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default DaoDetail