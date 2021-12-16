import React from "react";
import cat_image1_desktop from "../images/cat_image1_desktop.png"
export default function Top(){

    

    return(
        <div className="top-container">
            <div className="top-text-container">
            <h1 className="header">Treat your pet (and you).<br />
            It's on us!</h1>
            <p>Treat your pet to a healthy treat for <b>free</b> to kick off<br />
            your Public Goods trail membership.</p>
            <br />
            <h3>See what it's like to be a Public Goods member.</h3>
            <ul className="list">
                <li>Included in your bundle is a free 2-week membership that gives you unlimited access to our entire collection of sustainable essentials.</li>
                <li>Take a load off. We make it easy for you to make better chioes. Always included: eco-friendly products you can trust.</li>
            </ul>
            <br />
            <br />
            <button className="claim-button">Claim your free offer</button>
            </div>
            <div className="top-img-container">
            <img src={cat_image1_desktop}></img>
            </div>
        </div>
    )
}