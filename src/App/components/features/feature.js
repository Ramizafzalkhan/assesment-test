import React from 'react'
import FeatureCard from './featureCard';

function Feature() {
    const item = [
        { id: 1, name: "Swipe Swap", des: "Discover new and unique NFTs with our Tinder-style swipe and match feature, Swipe Swap, which will recommend you NFTs based on your interests." },
        { id: 2, name: "Aggregated Marketplace", des: "Buy and sell NFTs on our Aggregated Marketplace – our dedicated marketplace listing all NFTs for sale from various popular NFT marketplaces. Boost your impressions by utilizing our self-promotion, features." },
        { id: 3, name: "Art Lottery", des: "Get an ART Lottery ticket with every swap or purchase tickets directly and you could be one of our weekly Lottery winners, receiving a pot of $ART tokens and a rare NFT. " },
        { id: 4, name: "Social Platform", des: "Engage with other users and their content – follow their accounts, like, comment, and bid on their NFTs. Create NFT playlists, forums, and more." },
        { id: 5, name: "Swap Auctions", des: "Play our Art Auctions – countdown-style bids that award the NFT to the highest bidder. Compete for the winning bid in Party Mode, or use Silent-Auction Mode to discretely place your offers. Auctioneers receive bonus ART Lottery tickets upon sale!" },
        { id: 6, name: "MyArt", des: "Create your personal profile where you can define your interests, and display your NFTs in a personalized way. Choose your avatar and how you want to showcase your collectibles. Add friends, and connect to Buyers/Sellers in a new way via direct message." },
        { id: 7, name: "NFT Vault", des: "Safely and securely store your precious NFTs in your personal NFT Vault. Accessible by password on browser version or using Face ID on iPhone, Swap Vault ensures an extra layer of security with 2FA and platform insurance protocols." },
    ];
    return (
        <div className="feature-section">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-10">Features</h2>
                <div class="grid grid-cols-4 gap-4 mx-auto">
                    {item.map((item) => (
                        < FeatureCard item={item} />
                    ))}
                </div>

            </div>
        </div>


    )
}

export default Feature
