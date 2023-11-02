import axios from "axios";
import useFavNews from "../../Hooks/useFavNews";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";


const FavNews = () => {
    const {mainUrl} = useContext(AuthContext);
    const {data} = useFavNews();
    console.log
    const handleDelete = (id) => {
        axios.delete(`${mainUrl}/fav-news/${id}`)
        .then(res => {
            if(res.data.acknowledged) {
                toast.success("Deleted!");
            }
        }).catch(err => console.log(err));
    }

    return (
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:mb-28 mb-20"> 
            <h1 className="md:text-5xl font-bold text-center md:my-16 my-10">All Favorite News</h1>

            <div className="grid grid-cols-1 gap-6">
                {
                    data?.map(news => <div className="grid grid-cols-6  sm:gap-8 gap-3 bg-green-400 rounded-xl overflow-hidden place-items-center justify-start" key={news._id}>
                        <div className="col-span-2 h-full">
                            <img className="w-full h-full object-cover" src={news?.newsImage} alt="" />
                        </div>

                        <div className="col-span-3 text-left sm:py-0 py-3">
                            <h1 className="text-white md:text-2xl sm:text-lg text-xs font-semibold">{news?.newsTitle}</h1>
                        </div>
                        <Toaster></Toaster>
                        <div className="sm:px-0 pr-2 flex flex-col gap-2">
                            <button onClick={() => handleDelete(news._id)} className="p-[2px] sm:btn-sm col-span-1 btn-primary rounded-lg sm:text-sm text-xs">Remove</button>
                            <button className="p-[2px] sm:btn-sm col-span-1 bg-[red] text-white rounded-lg sm:text-sm text-xs">Unread</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FavNews;