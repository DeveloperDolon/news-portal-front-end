import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SingleNews = () => {
    const { mainUrl, user } = useContext(AuthContext);
    const data = useLoaderData();
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`${mainUrl}/all-news?&size=${6}`)
            .then(res => {
                setNews(res.data)
            }).catch(err => console.error(err));

    }, [mainUrl]);

    const handleAddToFavorite = () => {
        axios.post(`${mainUrl}/fav-news`, {
            user: user.email,
            newsId: data?._id,
            newsTitle: data?.headline,
            newsImage: data?.image
        }, { withCredentials: true }).then(res => {
            if (res.data.insertedId) {
                toast.success('News Added to favorite!')
            }
        })
            .catch(err => console.log(err))
    }
    
    return (
        <div className="max-w-7xl gap-5 mx-auto lg:px-0 md:px-5 px-3 md:my-32 my-16 grid md:grid-cols-3 grid-cols-1">
            <div className="md:col-span-2">
                <div className="relative">
                    <img className="rounded-lg w-full" src={data?.image} alt="" />
                    <div className="flex justify-between flex-wrap gap-3 m-3">
                        <p className="italic">Author : {data?.author}</p>
                        <p className="absolute left-5 bottom-[20%] text-white italic">Source : {data?.source}</p>
                        <p>{data?.date_published}</p>
                    </div>
                </div>
                <button onClick={handleAddToFavorite} className="btn btn-success text-white">Add to Favorite</button>
                <h1 className="md:text-5xl text-3xl md:my-5 my-3 font-semibold">{data?.headline}</h1>
                <p className="md:text-base text-sm md:leading-loose leading-relaxed">{data?.content}</p>
                <Toaster />
            </div>

            <div className="">
                <h1 className="md:text-5xl mb-6 text-3xl font-semibold text-center">More News</h1>

                <div className="space-y-10">
                    {
                        news?.map((news, idx) => news?._id !== data?._id && <div key={idx}>
                            <div>
                                <img src={news?.image} alt="" />
                            </div>
                            <div className="mt-3">
                                <NavLink to={`/news/${news?._id}`} className="mt-2">{news?.headline}</NavLink>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleNews;