import React from 'react'
// import * as classes from './featureStyle'
function FeatureCard(props) {
    return (
        <div className="bg-theme rounded-xl  p-10">
            <div className="bg-white relative w-10 h-10 rounded-full">
            <img className="absolute top-0" src="assets/images/icon.svg" alt="" />
            </div>
            <h2 className="text-xl font-bold pb-2.5">{props.item.name}</h2>
            <p>{props.item.des}</p>
        </div>
    )
}

export default FeatureCard
