import React from "react";
import memesData from "../memesData";

export default function Meme() {
    function renderMeme() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        return (
            <img class="form--meme" src={memesArray[randomNumber].url}></img>
        );
    }
    renderMeme();

    return (
        <main>
            <form className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top Text"
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom Text"
                />
                <button
                    onClick={renderMeme}
                    className="form--button"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </main>
    );
}
