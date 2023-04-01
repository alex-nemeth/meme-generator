import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((res) => setAllMemeImages((prevState) => res));
    }, []);

    function renderMeme(event) {
        event.preventDefault();
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

    function handleChange(event) {
        setMeme((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    }

    console.log(meme);

    return (
        <main>
            <form className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button onClick={renderMeme} className="form--button">
                    Get a new meme!
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
