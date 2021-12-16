import React from "react";
import cat_treats_minnows from "../images/cat_treats_minnows.png"
export default function Middle(){



    return(
        <div className="middle">
            <h2>OUR TREAT</h2>
            <div className="pic-container">
            <div className="pic">
            <img src={cat_treats_minnows}></img>
            <h3>Freeze Dried Minnows</h3>
            <p>Healthy ingredients with nothing to hide.</p>
            </div>
            <div className="pic">
            <img src={cat_treats_minnows}></img>
            <h3>Freeze Dried Minnows</h3>
            <p>Healthy ingredients with nothing to hide.</p>
            </div>
            </div>
        </div>
    )
}