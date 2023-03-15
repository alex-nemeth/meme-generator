import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="header--logo-text">
                <img
                    src="./images/clueless.png"
                    alt="clueless"
                    className="header--image"
                />
                <h3 className="header--title">Meme Generator</h3>
            </div>
            <h5 className="header--project">React Course - Project 3</h5>
        </header>
    );
}
