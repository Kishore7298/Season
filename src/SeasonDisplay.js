import React from 'react';

function getSeason(lat,month){
    if(month>=2 && month<=9 ){
        return lat>0?"Summer":"Winter";
    } else {
        return lat>0?"Winter":"Summer";
    }
}

const SeasonDisplay = (props)=>{
    let season = getSeason(props.lat,new Date().getMonth());
    let text = season === "Winter"?"burr! It's chilly!":"Let's hit the beach!";
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default SeasonDisplay;