import React from 'react'
import * as classes from './communityStyles'
// import {createUseStyles} from 'react'
// const styles = createUseStyles({
//     imageCommunity:{
//         borderRadius: "0px 13px 13px 13px",
//     }
// })
function CommunityCard(props) {
  
    return (
        
        <div className="bg-theme rounded-xl">
        <h3 className="text-white text-2xl font-bold mb-7 mt-10 ml-5">
            {props.item}
        </h3>
        <div className="flex mb-3.5" style={classes.imageCard}>
            {props.list[props.item].map((el => (
                <div style={classes.image}>
                    <img src={el.image}  alt="imag" style={classes.singleImg} />
                </div>
            )))}
        </div>
    </div>
   
    )
}

export default CommunityCard
