
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const mainUrl = "http://localhost:5000";

const useNewsData = () => {
    
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`${mainUrl}/all-news`)
        .then(res => setNews(res.data))
        .catch(err => console.log(err))
    }, [])

    return news;
};

export default useNewsData;