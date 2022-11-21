import React, { useState, useEffect } from "react";
import { getMeanings } from "../utils/api";
import headphones from "../images/headphones.png";
import Card from 'react-bootstrap/Card';
import background from '../images/background.png';
import '../App.css';
function FormSearch({ }) {
    const [word, setWord] = useState('');
    const [data, setData] = useState({});
    const [phonetics, setPhonetics] = useState('');
    const [meanings, setMeanings] = useState('');
    const [sound, setSound] = useState('');
    const [example, setExample] = useState('');

    useEffect(() => {
        getMeanings(word).then((response) => {
            setData(response[0]);
        });
    }, [word]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMeanings(data.meanings[0].definitions[0].definition);
        data.phonetic ? setPhonetics(data.phonetic) : setPhonetics(data.phonetics[1].text);
        setSound(data.phonetics[0].audio);
        setExample(data.meanings[0].definitions[0].example);
        setWord('');
    };
    console.log(sound);
    let audio = new Audio(sound);
    const playAudio = () => {
        audio.play();
    };


    return (


        <div className="form-floating bg-primary py-3 pb-1 d-flex justify-content-center">
            <form
                onClick={handleSubmit}
            >
                <input
                    type="text"
                    className="p3"
                    placeholder="Search the meanings of ...."
                    id="floatingInput"
                    value={word}
                    onChange={(e) => { setWord(e.target.value); }}

                />
                <button
                    className="btn btn-light text-light col-md-1 col-sm-2 mx-2"
                >
                    Search
                </button>
            </form>
            <div className="result-card">
                {
                    sound ? <p>Hear: <img src={headphones} onClick={playAudio} /> </p> : ''

                }
                {phonetics ? <p>Phonetics:{phonetics}</p> : ''}
                {meanings ? <div>
                    <h3>Meanings :</h3>
                    <p>{meanings}</p> </div> : ''}
                {example ? <p>Example:{example}</p> : ''}
            </div>

        </div>
    );
};

export default FormSearch;;