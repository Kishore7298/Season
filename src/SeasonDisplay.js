import React from 'react';

function getSeason(lat,month){
    if(month>=2 && month<=9 ){
        return lat>0?"Summer":"winter";
    } else {
        return lat>0?"Winter":"Summer";
    }
}

const SeasonDisplay = (props)=>{
    let season = getSeason(props.lat,new Date().getMonth())
    return (
        <div>{season}</div>
    )
}

export default SeasonDisplay;