import axios from "axios";
const wordApi = axios.create({
    baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/"
});

export const getMeanings = (searchTerm) => {
    return wordApi.get(`${searchTerm}`).then((res) => {
        console.log(res.data);
        return res.data;
    });
};