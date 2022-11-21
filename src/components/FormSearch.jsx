import React, { useState, useEffect } from "react";
import { getMeanings } from "../utils/api";
import headphones from "../images/headphones.png";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
    let audio = new Audio(sound);
    const playAudio = () => {
        audio.play();
    };

    return (
        <div>
            <Form onClick={handleSubmit}  >
                <input
                    type="text"
                    className="form"
                    placeholder="Search the meanings of ...."
                    color="none"
                    id="floatingInput"
                    value={word}
                    onChange={(e) => { setWord(e.target.value); }}
                    style={{ "background-color": "#D9D9D9", padding: "5px" }}
                />
                <Button variant="primary">Search </Button>
            </Form>

            <Card className="bg-light text-black" style={{ textAlign: "center" }}>
                <Card.Img variant="center" src={background} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text >
                        {
                            sound ? <p className="">Hear: <img src={headphones} onClick={playAudio} /> </p> : ''
                        }
                        {phonetics ? <h5 className="">Phonetics:{phonetics}</h5> : ''}
                        {meanings ? <div>
                            <h3 className="text-left">Meanings :</h3>
                            <p>{meanings}</p> </div> : ''}
                        {example ? <div className="example"><br /><h2>Example:</h2>
                            <p>{example}</p> <br /><br /><br /><br /><br /><br /><br /><br /></div> : ''}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="result-card" >

            </Card>
        </div>
    );
};

export default FormSearch;;