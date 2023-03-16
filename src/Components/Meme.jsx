import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function renderMeme() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage: url,
            };
        });
    }

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
                <button onClick={renderMeme} className="form--button">
                    Submit
                </button>
            </form>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    );
}
