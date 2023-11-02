import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SingleNews = () => {
    const {mainUrl, user} = useContext(AuthContext);
    const data = useLoaderData();

    const handleAddToFavorite = () => {

        axios.post(`${mainUrl}/fav-news`, {
            user: user.email,
            newsId: data?._id,
            newsTitle: data?.headline,
            newsImage: data?.image
        }, {withCredentials: true}).then(res => {
            if(res.data.insertedId) {
                toast.success('News Added to favorite!')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:my-32 my-16 grid md:grid-cols-3 grid-cols-1">
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
                <Toaster/>
            </div>

            <div>

            </div>
        </div>
    );
};

export default SingleNews;