import React from 'react'
import CommunityCard from './communityCard'

function Community() {
    const ctg = ['gaming', 'metaverse', 'joneDoe'];
    const data = {
        gaming: [
            { id: 1, name: "Gaming LFG", ctg: 'gaming', image: "assets/images/gaming-lfg-two.jpg" },
            { id: 6, name: "Jane Doe 3", ctg: 'gaming', image: "assets/images/gaming-lfg-three.jpg" },
            { id: 4, name: "Jane Do 1", ctg: 'gaming', image: "assets/images/gaming-lfg-three.jpg" },
            { id: 4, name: "Jane Do 1", ctg: 'gaming', image: "assets/images/gaming-lfg-three.jpg" },
        ],
        metaverse: [
            { id: 5, name: "Jane Doe 2", ctg: 'metaverse', image: "assets/images/gaming-lfg-three.jpg" },
            { id: 2, name: "Metaverse", ctg: 'metaverse', image: "assets/images/gaming-lfg-two.jpg" },
            { id: 4, name: "Jane Do 1", ctg: 'gaming', image: "assets/images/gaming-lfg-three.jpg" },
            { id: 7, name: "Jane Doe 4", ctg: 'metaverse', image: "assets/images/gaming-lfg-three.jpg" },
        ],
        joneDoe: [
            { id: 3, name: "Jane Doe", ctg: 'jane-doe', image: "assets/images/gaming-lfg-three.jpg" },
            { id: 4, name: "Jane Do 1", ctg: 'gaming', image: "assets/images/gaming-lfg-three.jpg" },
            { id: 4, name: "Jane Do 1", ctg: 'gaming', image: "assets/images/gaming-lfg-three.jpg" },
            { id: 8, name: "Jane Doe 5", ctg: 'jane-doe', image: "assets/images/gaming-lfg-three.jpg" },
        ]
    }

    return (
        <div style={{background:'url(/assets/images/bg-ourCommunity.png)top left no-repeat'}}>
            <div className="container mx-auto pb-36 pt-14">
                <h2 className="text-4xl font-bold text-white text-center mb-10">Our Community</h2>
                <div className="grid grid-cols-3 gap-4">
                    {ctg.map((el) => (
                        <CommunityCard item={el} list={data} />
                    ))}
                </div>

            </div>
        </div>


    )
}

export default Community
