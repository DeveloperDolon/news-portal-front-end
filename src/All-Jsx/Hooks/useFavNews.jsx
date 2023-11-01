import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useFavNews = () => {

    const { user, mainUrl} = useContext(AuthContext);

    const { isLoading, error, data } = useQuery({
        queryKey: ["favnews"],
        queryFn: async () => {
            const resposne = await axios.get(`${mainUrl}/fav-news?email=${user.email}&sort=1`);
            const data = await resposne.data;
            return data;
        }
    })

    return {isLoading, error, data};
};

export default useFavNews;