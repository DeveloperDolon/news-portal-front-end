import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const FavNews = () => {
    const {mainUrl, user, logOut, setUser} = useContext(AuthContext);
    const [favNews, setFavNews] = useState([]);


    useEffect(() => {
        axios.get(`${mainUrl}/fav-news?email=${user?.email}&sort=1`, {withCredentials: true})
        .then(res => setFavNews(res.data))
        .catch(err => { 
            console.log("This is the error",err.response.status)
            console.log(err.response.status === 401)
            if(err.response.status === 401) {
                logOut()
                .then(() => {
                    setUser(null);
                    toast.success("You are logged out!!");
                }) .catch(err => {
                    console.log(err)
                })
            }
        })
    }, [logOut, mainUrl, user?.email]) 
    
    const handleDelete = (id) => {
        axios.delete(`${mainUrl}/fav-news/${id}`, {withCredentials: true})
        .then(res => {
            if(res.data.acknowledged) {
                toast.success("Deleted!");
                const filterNews = favNews.filter(news => news._id !== id);
                setFavNews(filterNews);
            }
        }).catch(err => console.log(err));
    }

    const handleRead = (id) => {
        axios.patch(`${mainUrl}/fav-news/${id}`, {status : true}, {withCredentials: true})
        .then(res => {
            if(res.data.acknowledged) {
                toast.success("Reading Success!!");
                const filterNews = favNews.filter(news => news._id !== id);
                const thatNews = favNews.find(news => news._id === id);
                thatNews.status = true;
                const allNews = [thatNews, ...filterNews];
                setFavNews(allNews);
            }
        }).catch(err => console.log(err.message));
    }

    return (
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:mb-28 mb-20"> 
            <h1 className="md:text-5xl font-bold text-center md:my-16 my-10">All Favorite News</h1>
            <div className="grid grid-cols-1 gap-6">
                {
                    favNews?.map(news => <div className="grid grid-cols-6  sm:gap-8 gap-3 bg-green-400 rounded-xl overflow-hidden place-items-center justify-start" key={news._id}>
                        <div className="col-span-2 h-full">
                            <img className="w-full h-full object-cover" src={news?.newsImage} alt="" />
                        </div>

                        <div className="col-span-3 text-left sm:py-0 py-3">
                            <Link to={`/news/${news.newsId}`}>
                                <h1 className="text-white hover:underline md:text-2xl sm:text-lg text-xs font-semibold">{news?.newsTitle}</h1>
                            </Link>
                        </div>
                        <Toaster></Toaster>
                        <div className="sm:px-0 pr-2 flex flex-col gap-2">
                            <button onClick={() => handleDelete(news._id)} className="p-[2px] sm:btn-sm col-span-1 btn-primary rounded-lg sm:text-sm text-xs">Remove</button>

                            {
                                news?.status ?  <button className="p-[2px] sm:btn-sm col-span-1 bg-green-600 text-white rounded-lg sm:text-sm text-xs">Read Done</button> : 
                                 <button onClick={() => handleRead(news._id)} className="p-[2px] sm:btn-sm col-span-1 bg-[red] text-white rounded-lg sm:text-sm text-xs">Unread</button>
                            }
                            
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FavNews;