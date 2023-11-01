
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const useNewsData = () => {
    const {mainUrl} = useContext(AuthContext);    
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`${mainUrl}/all-news`)
        .then(res => setNews(res.data))
        .catch(err => console.log(err))
    }, [])

    return news;
};

export default useNewsData;