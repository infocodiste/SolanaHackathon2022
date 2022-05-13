import React, { useEffect } from 'react'
import Banner from './Banner'
import DaoList from './DaoList'

const Home = () => {

    return (
        <>
            <div className="main">
                <Banner />
                <DaoList />
            </div>
        </>
    )
}

export default Home