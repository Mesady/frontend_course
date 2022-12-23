import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RadioData from '../../models/RadioData';
import '../../css/lofi.css';



const RadioCard = (props: RadioData) => {
    return (
        <div className="liveradio">
            <iframe width="300" height="200" src={props.radiourl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="des">{props.name}</div>
        </div>
    )
}

export default RadioCard;