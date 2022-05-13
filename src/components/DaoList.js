import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { daoData } from '../components/daoData'

const DaoList = () => {

    useEffect(() => {
        console.log(daoData);
    }, [daoData])

    return (
        <section className='itemsSection'>
            <div className="containerNew">
                <div className="row itemOuter">
                    {daoData.map((obj, i) => {
                        {/* const desc = obj.mission.length > 10 ? obj.mission.substring(0,10) : obj.mission */ }
                        return (
                            <div key={i} className="col-md-3 items">
                                <div className="daoItem">
                                    <div className="image">
                                        <img src={obj.image} alt={obj.name} height='70px' />
                                    </div>
                                    <div className="content">
                                        <h4>{obj.name}</h4>
                                        <p>{obj.mission.substring(0, 50)}...</p>
                                    </div>
                                    <NavLink to={`${obj.TreasuryAddress}`}>See More</NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DaoList