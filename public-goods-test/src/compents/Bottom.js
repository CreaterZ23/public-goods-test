import React from "react";
import cat_image2_desktop from "../images/cat_image2_desktop.png"
export default function Bottom(){



    return(
        <div className="bottom">
            <div className="text-container">
            <h2 className="bottom-header">PET-APPROVED</h2>
            <h2 className="bottom-statement">It feels good to be a member.</h2>
            <p>After your free trial, become a full-time member with benefits for $59 a year.</p>
            <ul>
                <li>Cancel anytime during your free trial.</li>
                <li>Free shipping on orders over $45.</li>
                <li>Direct-to-consumer prices on hundreds of premium products.</li>
            </ul>
            </div>
            <div className="img-container">
            <img src={cat_image2_desktop}></img>
            </div>
        </div>
    )
}