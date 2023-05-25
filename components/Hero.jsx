import React from "react";
import { ReactDOM } from "react";

export default function Hero() {
    const newline = <br />;
    return (
        <main>
            <div className="img-container">
                <img src='https://i.postimg.cc/nLqdMsYh/photo-grid.png' />
            </div>
            <div className="text-content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by {newline} one-of-a-kind hosts—all without leaving {newline} home</p>
            </div>
        </main>
    );
}