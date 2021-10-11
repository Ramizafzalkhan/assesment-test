import React from 'react'
import App from '../../App'
import * as classes from './lgfStyles'


function Lgf() {
    const item = [
        { id: 1, title: "Governance and Utility" },
        { id: 2, title: "Staking Incentives" },
        { id: 3, title: "Fee-Free Transactions" },
        { id: 4, title: "Self-Promotion" },
        { id: 5, title: "Utilities" },
        { id: 6, title: "Utilities" },
    ]
    return (
      
            <div className="container mx-auto pb-36 pt-14">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold text-white  mb-10">$LFG Token</h2>
                        <p>Lorem is the SwapNFT ERC-20 native token built on the Ethereum blockchain. Use ART Coins on the SwapNFT platform and receive ‘no fees’ swaps, get rewarded with staking incentives, receive exclusive access in our Auction House feature, and unique customizations for your avatar. ART Tokens will also be used to mint NFTs on the platform and 50% of the $ART minting fee will be burned, increasing the scarcity and value of the coin over time. </p>
                        <div className="flex flex-wrap mt-8">
                            {item.map((item) => (
                                <div className="p-8 bg-theme rounded-xl mb-3 mr-1" style={classes.itemsList}>
                                    <p className="font-bold text-white text-xl">{item.title}</p>
                                </div>
                            ))}
                            <button className="btn btn-default text-white">
                                Tokenomics
                            </button>
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <img src="assets/images/lgsImage.png" style={classes.sideImage} alt="lgs" />
                    </div>
                </div>

            </div>
       
    )
}

export default Lgf
