
import { useState, useEffect } from "react";
import { getMeanings } from "../utils/api";
function Results(searchTerm) {
    const [meanings, setMeanings] = useState([]);

    // useEffect(() => {
    // getMeanings(searchTerm).then((results) => {
    //     console.log(results);
    // setMeanings(results[0].word);
    //     });
    // }, [searchTerm]);
    useEffect(() => {
        console.log(searchTerm);
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`).then((response) => {
            return response.json();

        }).then((data) => {
            console.log(data);
        });
    }, [searchTerm]);
    return (
        <div>
            hello
        </div>
    );
}

export default Results;