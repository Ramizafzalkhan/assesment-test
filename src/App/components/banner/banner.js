import React from 'react'
// import Button from 'react'
// import {img} from './'
// import styled from 'styled-components'

function Banner() {
  return (
    // <Section>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-6xl pt-32 font-bold	text-white mb-8">
              The <span className="text-blue-600">First </span> NFT Social
              Gaming Ecosystem
            </h1>
            <p className="text-gray-300 text-2xl mb-8">
              Lorem is the first social-media platform of its kind, bringing NFTs to the everyday consumer through our cross-platform and cross-chain aggregator marketplace.
            </p>
            <button className="btn btn-default text-white">
               Launch App
            </button>
            {/* <Button>Launch App</Button>   */}
          </div>

          <div>
            <img src="assets/images/image-banner.png" alt="imag" />
          </div>
        </div>
    </div>

     
      

    // </Section>
  )
}

export default Banner
