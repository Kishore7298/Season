import React from 'react';

function getSeason(lat,month){
    if(month>=2 && month<=9 ){
        return lat>0?"Summer":"Winter";
    } else {
        return lat>0?"Winter":"Summer";
    }
}
const SeasonConfig = {
    Summer:{
        text:"Let's hit the beach!",
        iconName:"sun"
    },
    Winter:{
        text:"Burr! It's chilly!",
        iconName:"snowflake"
    }

}
const SeasonDisplay = (props)=>{
    let season = getSeason(props.lat,new Date().getMonth());
    let {text, iconName } = SeasonConfig[season];
    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;