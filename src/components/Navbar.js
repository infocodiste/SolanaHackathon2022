import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [walletAddress, setWalletAddress] = useState(null);

    // Actions
    const checkIfWalletIsConnected = async () => {
        try {
        const { solana } = window;

        if (solana) {
            if (solana.isPhantom) {
            console.log('Phantom wallet found!');
            const response = await solana.connect({ onlyIfTrusted: true });
            console.log(
                'Connected with Public Key:',
                response.publicKey.toString()
            );

            /*
            * Set the user's publicKey in state to be used later!
            */
            setWalletAddress(response.publicKey.toString());
            }
        } else {
            alert('Solana object not found! Get a Phantom Wallet 👻');
        }
        } catch (error) {
        console.error(error);
        }
    };



    const connectWallet = async () => {
        const { solana } = window;
      
        if (solana) {
          const response = await solana.connect();
          console.log('Connected with Public Key:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
        }
      };


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
                        <button className="connectBtn"
                        onClick={connectWallet} 
                        > {!walletAddress ? 'Connect': `${walletAddress.slice(0,4)}...${walletAddress.slice(-4)}` }</button> 
                    </div>
                {/* </div> */}
            </div>
        </nav>
        </header>
    )
}

export default Navbar