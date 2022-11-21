import axios from "axios";
import { useEffect } from "react";
const getApi = axios.create({
    baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
});

export const getMeanings = (word) => {
    return getApi.get(`/${word}`).then((res) => {
        return res.data;
    });
};