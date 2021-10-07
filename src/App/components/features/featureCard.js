import React from 'react'
import * as classes from './featureStyle'
function FeatureCard(props) {
    return (
        <div className="bg-theme rounded-xl  p-10">
            <div className="bg-white relative" style={classes.icon}></div>
            <h2 className="text-xl font-bold pb-2.5">{props.item.name}</h2>
            <p>{props.item.des}</p>
        </div>
    )
}

export default FeatureCard
